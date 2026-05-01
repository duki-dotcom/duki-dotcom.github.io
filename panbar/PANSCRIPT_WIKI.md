# Panbar System Wiki (Implemented V2.2)

Panbar is a simulated Roblox OS with three core pieces:

- PanScript language (`.pans`)
- Pan Editor IDE (`;paneditor`)
- Airi emotion-gated runtime

This document reflects what is implemented right now.

## Runtime Architecture

Runtime module: `panscript_runtime.lua`  
Used by:
- `cmds/panscript.lua`
- `cmds/paneditor.lua`

Execution flow:
1. Parse + validate PanScript
2. Airi state gate
3. Politeness gate
4. Transpile PanScript -> Luau
5. Execute in runtime sandbox
6. Log failure snapshots to `/PanBar2/logs`

## Airi Authority Stack

Checks run in this order:
1. `AngryError` (Airi unavailable: eating, cooldown, mood gate)
2. `PoliteError` (outside stable politeness range)
3. `SyntaxError` (format/grammar issues)
4. runtime execution (`RuntimeError` if runtime throws)

All user-facing speech is generated as Airi dialogue with high variation.

## PanScript Syntax (Current)

### Comments
- `# comment`
- `-- comment`

### Indentation
- spaces and tabs are accepted
- tabs are normalized as width `4`
- effective indentation must resolve to multiples of `4`

### Block Headers
Must end with `:`
- `if`, `elif`, `else`
- `while`
- `for x in range(...)`
- `def name(...)`

### Comma Rule
Suffix politeness must be comma-prefixed and outside brackets.

Valid:
```panscript
print("hello"), please
```

Invalid:
```panscript
print("hello") please
print("hello" please)
```

## Politeness Tokens

Prefix:
- `please`
- `kindly`
- `if_you_dont_mind`

Suffix:
- `please`
- `thanks`
- `if_you_dont_mind`

Gentle:
- `gently`
- `sorry`
- `pardon`

## Built-in Functions

- `print(...)`
- `feed(item?)`
- `how_polite()`
- `sleep(seconds)`
- `len(value)`
- `panic(message?)`
- `run_command(command_text)`
- `notify(title, body, tone?)`

## Airi Food System

Handled by `feed(...)`.

Default likes:
- `cake`
- `cupcake`
- `muffin`
- `apple`

Default dislikes:
- `broccoli`
- `onion`
- `garlic`
- `sardine`

Matching behavior:
- normalize case/punctuation
- plural normalization (`cupcakes -> cupcake`)
- nearest-known fuzzy fallback (edit-distance threshold)

Unknown food behavior:
- randomized first preference (like/dislike)
- persisted under `env.State.PanScriptAiri.FoodPreferences`
- future reactions stay consistent per item

## Convenience Commands

- `;feed <food?>`
  - Feeds Airi directly (defaults to `cake`).
  - Uses the same food preference system as `feed(...)` in PanScript.

## Airi Speech Variation

Airi speech is generated from large phrase-part pools by context categories:
- politeness zones
- angry gate
- syntax/runtime failures
- food liked/disliked/new-discovery

This yields hundreds of possible lines.

## Pan Editor (`;paneditor`)

Pan Editor is a Windows-style coding environment and the home of Airi.

Implemented:
- VSCode-style layout
- integrated file explorer
- tabbed file buffers
- line-number gutter
- mini terminal pane
- run/check buttons for PanScript
- command bridge (`Run Cmd`)
- quick open (`Ctrl+P`)
- command palette (`Ctrl+Shift+P`)
- save shortcut (`Ctrl+S`)
- run shortcut (`Ctrl+Enter`)
- Airi terminal speech in bright contrast color

## File Explorer Features

Explorer supports:
- viewing folders/files
- opening folders/files
- creating folders
- right-click context menu in details rows

Right-click options include:
- `Open`
- `Open With > Pan Editor`
- `Open With > Notepad`
- `Run File` for `.pan`, `.pand`, `.pans`

## Command Surface

- `;paneditor [path]`
- `;panscript run <code|file.pans>`
- `;panscript check <code|file.pans>`
- `;panscript howpolite <code|file.pans>`
- `;panscript new [name]`

## Logging

PanScript failures are logged to:
- `/PanBar2/logs`

Snapshots include:
- error category + message
- Airi mood/cooldown/eating/affection
- script metadata (line count + politeness metrics)
