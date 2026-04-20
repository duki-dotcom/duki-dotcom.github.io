# PanBar 2 Developer Notes

This file documents how PanBar 2 is structured, how to create new commands, which shared systems already exist, and what changed over time.

Update this file whenever PanBar 2 changes.

## Project Layout

- `main.lua`
  Main runtime. Builds the command bar UI, authenticates launch keys, loads commands/utils/perms, owns shared state, persistence, notifications, hotkeys, auto-exec, and inventory runtime logic.
- `loader.lua`
  Standalone loader for PanBar 2 license entry and main-script launch.
- `utils.lua`
  Shared helper functions used by commands.
- `cmds.lua`
  Command browser GUI used by `;cmds` / `;help`.
- `cmds/*.lua`
  Individual command modules.
- `control/`
  Browser-side offline key control panel plus optional local `keys.json` / `blacklist.json` archive exports.
- `index.json`
  Remote command manifest. New commands must be added here or they will not load.

## Command Module Format

Each command returns a table like this:

```lua
return {
    Name = "example",
    Aliases = {"alias1", "alias2"},
    Description = "What the command does.",
    Authority = "User",
    Category = "System",
    Arguments = {
        {Name = "mode", Type = "string", Required = true, Choices = {"on", "off"}},
        {Name = "target", Type = "player", Required = false}
    },
    Execute = function(args, env)
        -- command logic
    end
}
```

## Command Metadata

- `Name`
  Primary command name.
- `Aliases`
  Optional alternate names.
- `Description`
  Used by `;cmds`.
- `Authority`
  Rank gate. Current values used are `User`, `Trusted`, `Admin`.
- `Category`
  Used by the command browser to group commands.
- `Arguments`
  Used by main autocomplete and the `;cmds` GUI.

### Argument Fields

- `Name`
  Human-readable argument name.
- `Type`
  Current useful values:
  `string`, `player`, `flag`
- `Required`
  Informational right now, still useful for docs and future validation.
- `Choices`
  Use this whenever the input should come from a known list.
  This powers autocomplete and clickable suggestions in `;cmds`.
- `Greedy`
  Use this for arguments like spells where the value may contain spaces.
  Current autocomplete has special handling for a greedy `Choices` arg followed by a `player` arg.
- `Flag`
  Useful for command-like flags such as `shop`.

## `env` Passed To Commands

Every command receives:

- `env.Commands`
  Loaded command registry.
- `env.LocalPlayer`
  `Players.LocalPlayer`
- `env.ScreenGui`
  PanBar root `ScreenGui`
- `env.Rank`
  Current resolved rank.
- `env.Theme`
  Shared sapphire theme values.
- `env.Config`
  Global config table from `main.lua`.
- `env.State`
  Shared runtime state table for cross-command systems.
- `env.Notify(title, body, tone?, duration?)`
  Sapphire notification UI. Prefer this over `print` / `warn` for user-facing feedback.
- `env.Storage`
  Shared persistence helpers.
- `env.Execute(rawCommand)`
  Execute another command string.
- `env.Util`
  Shared helpers from `utils.lua`.
- `env.InvokedAs`
  The command name actually typed by the user.

### Command Runtime Contract (strict expectations)

All remote command modules are now validated before registration:

- module must return a table
- `Name` must be a non-empty string
- `Execute` must be a function
- `Authority` is normalized to one of `User`, `Trusted`, `Admin` (`User` fallback)
- `Aliases` must be a table when present (invalid alias formats are ignored)

Additional assumptions command authors should keep:

- `args` is positional text split on spaces; greedy behavior must be handled by command code/metadata.
- command execution is wrapped in `pcall` by `main.lua`; commands should still guard game object lookups.
- command names/aliases are case-insensitive at runtime.
- collisions are allowed but warned; later registrations can override earlier keys.

## Notification System

Use:

```lua
env.Notify("System", "Something happened.", "success")
```

### Supported tones

- `info`
- `success`
- `warning`
- `error`

Notifications are shown in the bottom-right of the screen with wrapped text.

## Shared `env.State`

These are already in active use:

- `env.State.Effects`
  Global effect toggles used by movement commands.
- `env.State.SpellSpeed`
  Reserved for future spell-speed style commands.
- `env.State.Teleport`
  Shared teleport config.
- `env.State.Spin`
  Shared spin config.
- `env.State.Persistent`
  Raw persisted data loaded from local config.
- `env.State.AutoExec`
  Auto-exec command list.
- `env.State.Hotkeys`
  Hotkey settings and binds.
- `env.State.Inventory`
  Inventory sorter settings.
- `env.State.CastESP`
  Runtime state for cast ESP when enabled.

## `env.Storage` API

### Generic

- `env.Storage.GetData()`
  Returns full persisted config table.

### Hotkeys

- `env.Storage.GetHotkeys()`
- `env.Storage.GetHotkeysEnabled()`
- `env.Storage.SetHotkeysEnabled(state)`
- `env.Storage.UpsertHotkey({ OriginalKey?, Key, Action, Value })`
- `env.Storage.RemoveHotkey(key)`

Hotkey bind fields currently used:

- `Key`
- `Action`
  `chat`, `command`, `virtual`
- `Value`
  For `virtual`, the current mock values are `laser` and `teleport`

### Auto-exec / config

- `env.Storage.AddAutoExec(commandText)`
- `env.Storage.RemoveAutoExec(commandText)`
- `env.Storage.GetAutoExec()`

### Inventory

- `env.Storage.GetInventoryData()`
- `env.Storage.SetInventoryEnabled(state)`
- `env.Storage.SetInventoryClearBrooms(state)`
- `env.Storage.SetInventoryOrder(orderTable)`

## `env.Util` API

Currently available in `utils.lua` or local fallback:

- `env.Util.Init(envLike)`
  Internal setup hook.
- `env.Util.fireSpell(origin, direction, spellName, speed)`
- `env.Util.getMouseTarget()`
- `env.Util.getPlayer(name)`
  Prefix match on username and display name.
- `env.Util.toggleSpin(parent, state)`
- `env.Util.runFX(env, isBefore)`
- `env.Util.sendTextMessage(message)`
  Sends text through TextChatService, with legacy chat fallback if needed.

## Persistence

PanBar 2 stores local config at:

- `PanBar2/config.json`

This currently contains:

- `AutoExec`
- `Hotkeys`
- `Admin`
- `Inventory`

PanBar 2 license auth is now offline and verifies a self-contained opaque key locally.

If local file APIs are unavailable in the executor environment, persistence will not work.

## Remote Loader Behavior and Failure Modes

PanBar 2 boot order in `main.lua` is:

1. authenticate key
2. load persisted config
3. load local cache manifest and evaluate remote version state
4. load `perms.json` from remote or cache
5. load `utils.lua` from remote or cache (fallback utils remain available)
6. load `index.json` + command modules from remote or cache

Current failure handling:

- `perms.json` fetch failure:
  rank list remains unchanged (defaults to no elevated users)
- `perms.json` parse/schema failure:
  malformed entries are dropped and a warning notification is shown
- `utils.lua` fetch/compile/init failure:
  fallback util implementation remains active
- `index.json` fetch/parse failure:
  remote commands are unavailable for that load, but native `reload` remains injected
- individual command fetch/compile/validation failure:
  module is skipped and load summary reports success/failure counts
- alias/name collisions:
  collisions are logged with warnings to aid debugging

## Remote Versioning And Cache

PanBar now supports a local command cache with remote version checks.

Cache files:

- `PanBar2/cache/manifest.json`
- `PanBar2/cache/index.json`
- `PanBar2/cache/utils.lua`
- `PanBar2/cache/perms.json`
- `PanBar2/cache/cmds/*.lua`

Remote version endpoint:

- `version.json` at `BaseUrl`

Version format policy:

- Use semantic-style tags like `v2.0.1`, `v2.0.2`, `v2.0.3`
- Do not use date-based versions

Recommended `version.json` shape:

```json
{
  "version": "v2.0.1"
}
```

Behavior:

- if remote version equals cached manifest version, PanBar prefers cached files for faster startup
- if remote version differs, PanBar fetches and refreshes cache files, then updates manifest version
- if remote version cannot be fetched, PanBar prefers cache when cache is complete
- if cache is missing/incomplete, PanBar falls back to remote fetch paths

## Current Systems

### Hotkeys

- Command: `;hotkey edit`
- Toggle: `;hotkey toggle on/off`
- Supports:
  chat text binds
  command binds
  virtual-tool binds

Current virtual hotkey mock actions:

- `laser`
  Starts on key down and fires continuously while the key is held, without equipping the `BEAM` tool.
- `teleport`
  Fires once on key down and teleports to the mouse hit position without equipping the teleport tool.

### Auto-exec

- `;addconfig <command>`
- `;removeconfig <command>`
- `;configlist`

These run automatically when PanBar loads.

### Inventory

- `;inventory on`
- `;inventory off`
- `;inventory edit`

Inventory settings support:

- saved ordered list of items
- optional broom hiding
- restoring hidden brooms instead of deleting them

### CastESP

- `;castesp on`
- `;castesp off`

Watches known cast animations and highlights the target player while casting.

### Admin Commands

- `;admin chat <player/all> <message>`
- `;admin kick <player/all> [reason]`
- `;admin ban <player/all> [reason]`
- `;admin bring <player/all>`
- `;admin tp <player/all> <destination>`
- `;admin rj <player/all>`
- `;admin rejoin <player/all>`
- `;admin re <player/all>`
- `;admin refresh <player/all>`
- `;admin kevinmode <player/all> <on/off/toggle>`
- `;admin logs <on/off/toggle>`
- `;admin debug <on/off/toggle>`

Supports:

- client-side admin actions for trusted PanBar admins
- targeting one player or everyone
- chat-based transport using normal `;admin ...` messages
- Kevin mode persistence and death overlay behavior
- a draggable admin log window for admin transport/activity
- optional extra debug-only local visual markers when admin debug is enabled

Implementation details are documented separately in the admin-only notes.

### PatFix

- `;patfix`
- `;patfix on`
- `;patfix off`

Supports:

- one-off energy floor fix to 15
- live monitor that restores energy to 15 if it stalls below that value

### Safety / Protection

- `;safe`
- `;antivoid`
- `;antifling`
- `;deletevelocity`

Supports:

- teleporting to the shared safe position
- teleporting the player to safe and clearing velocity if they fall below Y=2
- fling protection with velocity/spin detection and safe snapback
- clearing current velocity manually

### Movement Tweaks

- `;walkspeed <number?>`
- `;loopspeed <number?>`
- `;unloopspeed`
- `;jumpheight <number?>`
- `;loopjumpheight <number?>`
- `;unloopjumpheight`
- `;animspeed <number?>`
- `;tpwalk <number?>`
- `;untpwalk`
- `;maxslopeangle <number?>`

Supports:

- one-off walkspeed changes
- persistent walkspeed lock across resets while enabled
- one-off jump height / jump power changes depending on the game
- persistent jump lock across resets while enabled
- changing the speed of currently playing animation tracks
- teleport-walking while you move, with a separate stop command
- changing humanoid max slope angle

### Spectate / View

- `;view <player>`
- `;spectate <player>`
- `;unview`

Supports:

- spectating a target player
- resetting back to self if the target leaves
- resetting back to self if the target dies / loses their character

### Utility

- `;age <player>`
- `;gravity <number?>`
- `;hipheight <number?>`
- `;sit`
- `;reset`
- `;refresh`

Shows account age with a friendlier time breakdown.

## Autocomplete Notes

Main bar autocomplete currently supports:

- command-name ghost completion
- known `Choices`
- `player` arguments
- `flag` arguments
- greedy choice argument followed by player
  Example: `;fire <spell> <player>`

The `;cmds` GUI also uses command metadata to show clickable suggestions.

## Adding A New Command

1. Create a new file in `cmds/`.
2. Return a command table in the standard format.
3. Use `Arguments` metadata if the command has known inputs.
4. Prefer `env.Notify` for feedback.
5. Use `env.State` for shared runtime toggles/settings.
6. Use `env.Storage` if the feature should persist.
7. Use `env.Util` for common helpers instead of re-implementing.
8. Add the command filename, without `.lua`, to `index.json`.
9. Update this file and append a changelog entry.

## Command Tips

- Prefer one file per command, even for aliases with different names.
- If a command needs a clean stop path, add a separate explicit stop command like `untpwalk`.
- For runtime loops, store connections under `env.State.<Feature>` and always disconnect before rebinding.
- For values that should survive respawn while the toggle is active, reconnect on `LocalPlayer.CharacterAdded`.
- Keep notifications short and user-facing. PanBar already handles text wrapping.
- If the command only changes a local humanoid property once, it usually does not need shared state.
## Changelog

### 2026-04-20

- Replaced the admin projectile/particle transport with chat-driven `;admin ...` messages.
- Removed the expensive admin signal scan/decode loop from `main.lua` and switched the receiver to player `.Chatted` listeners.
- Kept the existing admin action surface and Kevin Mode behavior while reducing runtime overhead on the command bar.
- Expanded the hotkey system with a first-pass `virtual` action type for behavior-driven hotkeys.
- Added mock virtual hotkey support for laser fire and mouse teleport so users do not need equipped tools for those actions.

### 2026-04-09

- Added stricter command module validation and safer registration in `main.lua` (contract checks, authority normalization, alias validation, collision warnings).
- Improved loader diagnostics by reporting command load success/failure counts.
- Hardened `perms.json` parsing with schema-safe normalization and warning feedback on invalid data.
- Fixed listener cleanup leaks in `cmds/inventory.lua` and `cmds/hotkey.lua` by disconnecting `UserInputService` hooks when menus are destroyed.
- Improved `cmds/lasertools.lua` cleanup so stale `BEAM` tools are removed from both `Backpack` and `Character`.
- Resolved refresh/reload naming conflict by stopping native reload override of `refresh`.
- Made `reload` accessible to all users and added immediate load-start notification: "Loading commands, please wait...".
- Added local cache system for `index.json`, `utils.lua`, `perms.json`, and command modules under `PanBar2/cache/`.
- Added manifest + remote version-gate loading flow using `version.json` and non-date version tags (for example `v2.0.x`) to skip unnecessary network reloads.

### 2026-04-07

- Improved main command bar sizing, animation, autocomplete placement, and keyboard handling.
- Fixed right-arrow autocomplete acceptance and restored up/down history handling while focused.
- Fixed the semicolon opener flow and ESC close behavior for the command bar.
- Added shared `env.State`, `env.Config`, `env.Storage`, and fallback util wiring for safer command upgrades.
- Added shared sapphire notification UI.
- Added local persistence at `PanBar2/config.json`.
- Added auto-exec config commands: `addconfig`, `removeconfig`, `configlist`.
- Added hotkey system with GUI editor and runtime execution.
- Added chat send helper to shared utils/fallback utils.
- Added inventory sorting system with persisted settings and edit GUI.
- Fixed the inventory editor layout bug caused by invalid custom instance field assignment.
- Changed inventory runtime so sorting applies on enable, after edits, and on respawn instead of looping.
- Added cast ESP command.
- Added `patfix`, `safe`, `antivoid`, `antifling`, `age`, `view`, and `unview`.
- Added `deletevelocity`, `gravity`, `hipheight`, `sit`, `reset`, and `refresh`.
- Changed `antivoid` to clear velocity and send the player to the safe coordinates.
- Added safer spectate connection handling so the camera resets when the target leaves or dies.
- Added `animspeed`, `walkspeed`, `loopspeed`, `unloopspeed`, `jumpheight`, `loopjumpheight`, `unloopjumpheight`, `tpwalk`, `untpwalk`, and `maxslopeangle`.
- Added an admin command system with `;admin` subcommands for chat, kick/ban, bring, teleport, rejoin, refresh, and Kevin Mode.
- Added persistent Kevin Mode state and the local overlay/jumpscare hook for admin-triggered Kevin Mode.
- Moved sensitive admin implementation details into a separate admin-only markdown file.
- Added a temporary admin debug HUD and local visual marker preview for testing admin actions.
- Added a temporary draggable `;admin logs` panel and `;admin debug`.
- Added stronger offline launch authentication in `main.lua` using a self-contained opaque key format.
- Added a new `loader.lua` for PanBar 2 with offline key validation and saved-key support.
- Added a new `control/` folder with a revamped browser key manager, opaque key generation, and optional local archive exports.
- Expanded the developer reference so it better documents command patterns, shared systems, and runtime cleanup rules.
- Improved developer documentation coverage for command creation and shared systems.
