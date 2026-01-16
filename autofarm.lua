local player = game.Players.LocalPlayer
local teleportService = game:GetService("TeleportService")
local scriptUrl = "https://wizardlife.online/autofarm.lua"

-- Function to handle the persistence logic
local function queueSelf()
    local queue = (syn and syn.queue_on_teleport) or queue_on_teleport
    if queue then
        queue('loadstring(game:HttpGet("' .. scriptUrl .. '"))()')
    end
end

-- Function to check for the key in inventory or character
local function hasKey()
    local keyName = "Key" -- Ensure this matches the exact name of the item
    local char = player.Character
    local backpack = player:FindFirstChild("Backpack")
    return (char and char:FindFirstChild(keyName)) or (backpack and backpack:FindFirstChild(keyName))
end

-- Main Execution Logic
local interactives = workspace:WaitForChild("Interactives")
local fancy = interactives:FindFirstChild("Fancy")
local palace = interactives:FindFirstChild("Palace")

if fancy and palace then
    local character = player.Character or player.CharacterAdded:Wait()
    local root = character:WaitForChild("HumanoidRootPart")
    
    -- 1. Teleport to Fancy
    root.CFrame = fancy:GetModelCFrame()
    print("At Fancy. Waiting for key pickup...")

    -- 2. Wait for the key to be registered in inventory
    while not hasKey() do
        task.wait(0.1)
    end
    print("Key obtained!")

    -- 3. Teleport to Palace
    root.CFrame = palace:GetModelCFrame()
    task.wait(1) -- Short delay to ensure Palace interaction registers

    -- 4. Monitor Distance for Rejoin Trigger
    while task.wait(1) do
        local palacePos = palace:GetModelCFrame().Position
        local dist = (root.Position - palacePos).Magnitude
        
        if dist > 200 then
            print("Distance threshold exceeded. Rejoining...")
            
            queueSelf() -- Queue the script for the next session
            
            -- Rejoin logic
            player:Kick("Rejoining...")
            task.wait(0.1)
            teleportService:Teleport(game.PlaceId, player)
            break
        end
    end
end
