# PanBar 2 Developer Notes

This file documents how PanBar 2 is structured, how to create new commands, which shared systems already exist, and what changed over time.

Update this file whenever PanBar 2 changes.

## Project Layout

- `main.lua`
  Main runtime. Builds the command bar UI, loads commands/utils/perms, owns shared state, persistence, notifications, hotkeys, auto-exec, and inventory runtime logic.
- `utils.lua`
  Shared helper functions used by commands.
- `cmds.lua`
  Command browser GUI used by `;cmds` / `;help`.
- `cmds/*.lua`
  Individual command modules.
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
- `Inventory`

If local file APIs are unavailable in the executor environment, persistence will not work.

## Current Systems

### Hotkeys

- Command: `;hotkey edit`
- Toggle: `;hotkey toggle on/off`
- Supports:
  chat text binds
  command binds

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

Supports:

- teleporting to the shared safe position
- lifting the player if they fall below Y=2
- fling protection with velocity/spin detection and safe snapback

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

## Changelog

### 2026-04-07

- Added shared sapphire notification UI.
- Added local persistence at `PanBar2/config.json`.
- Added auto-exec config commands: `addconfig`, `removeconfig`, `configlist`.
- Added hotkey system with GUI editor and runtime execution.
- Added chat send helper to shared utils/fallback utils.
- Added inventory sorting system with persisted settings and edit GUI.
- Added cast ESP command.
- Fixed inventory editor error caused by assigning custom fields like `Row.SlotLabel` onto Roblox instances.
- Added `patfix`, `safe`, `antivoid`, `antifling`, `age`, `view`, and `unview`.
- Added safer spectate connection handling so the camera resets when the target leaves or dies.
- Improved developer documentation coverage for command creation and shared systems.
