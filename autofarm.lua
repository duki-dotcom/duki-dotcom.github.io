local player = game.Players.LocalPlayer
local teleportService = game:GetService("TeleportService")

-- This is the code that will be "queued" to run in the next server
local rejoinScript = [[
    repeat task.wait() until game:IsLoaded()
    -- Put the link to your script or the raw code here
    -- For now, we assume this script is saved or we re-run the logic
]]

-- Function to check for the key (looking for anything named "Key" in character/backpack)
local function hasKey()
    local keyName = "Key" 
    local char = player.Character
    local backpack = player:FindFirstChild("Backpack")
    return (char and char:FindFirstChild(keyName)) or (backpack and backpack:FindFirstChild(keyName))
end

-- 1. Locate Positions
local fancy = workspace.Interactives:FindFirstChild("Fancy")
local palace = workspace.Interactives:FindFirstChild("Palace")

if fancy and palace then
    local root = player.Character:WaitForChild("HumanoidRootPart")
    
    -- 2. Teleport to Fancy
    root.CFrame = fancy:GetModelCFrame()
    print("Waiting for key...")

    -- 3. Wait for the key to appear in inventory
    while not hasKey() do
        task.wait(0.1)
    end
    print("Key obtained!")

    -- 4. Teleport to Palace
    root.CFrame = palace:GetModelCFrame()
    task.wait(1)

    -- 5. Monitor distance to trigger rejoin
    while task.wait(1) do
        local dist = (root.Position - palace:GetModelCFrame().Position).Magnitude
        if dist > 200 then
            print("Distance reached. Queuing script and rejoining...")
            
            -- This is how Infinite Yield stays active:
            if queue_on_teleport then
                -- Replace 'SCRIPT_URL_HERE' with a link to your raw script (Pastebin/GitHub)
                -- Or just wrap this entire script in a string and put it here.
                queue_on_teleport('loadstring(game:HttpGet("test"))()')
            end
            player:Kick("Rejoining...")
            task.wait(0.1)
            teleportService:Teleport(game.PlaceId, player)
            break
        end
    end
end
