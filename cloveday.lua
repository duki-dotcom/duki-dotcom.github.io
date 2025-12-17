-- cloveday standalone logic / halo and events

local RS = game:GetService("ReplicatedStorage")
local Players = game:GetService("Players")
local Events = RS:WaitForChild("Events")

local haloEnabled = false
local haloThread = nil
local targetPlayer = nil

local function isCloveDay()
    local date = os.date("*t")
    return date.month == 12 and date.day == 17
end

-- Function to fire halo around target player
local function startHalo(p)
    if haloEnabled then return end
    if not p or not p.Character or not p.Character:FindFirstChild("HumanoidRootPart") then return end

    haloEnabled = true
    targetPlayer = p

    haloThread = task.spawn(function()
        while haloEnabled do
            if not targetPlayer
            or not targetPlayer.Character
            or not targetPlayer.Character:FindFirstChild("HumanoidRootPart") then
                break
            end

            local hrp = targetPlayer.Character.HumanoidRootPart
            local center = hrp.Position + Vector3.new(0, 6, 0)

            local radius = 7
            local points = 14
            local spell = "sectumsempra"
            local speed = 2

            for i = 1, points do
                if not haloEnabled then break end

                local angle = (math.pi * 2) * (i / points)
                local offset = Vector3.new(
                    math.cos(angle) * radius,
                    0,
                    math.sin(angle) * radius
                )

                local origin = center + offset + Vector3.new(0, 10, 0)
                fireSpell(origin, Vector3.new(0, -1, 0), spell, speed)
                task.wait(0.05)
            end

            task.wait(2.5)
        end
    end)
end

local function stopHalo()
    haloEnabled = false
    haloThread = nil
    targetPlayer = nil
end

-- Chat command handling
Players.PlayerAdded:Connect(function(player)
    player.Chatted:Connect(function(msg)
        if not isCloveDay() then return end

        local args = string.split(msg, " ")
        local command = args[1]:lower()

        if command == "!halo" then
            local name = args[2]
            if not name then return end

            local p = Players:FindFirstChild(name)
            if not p then return end

            if haloEnabled and targetPlayer == p then
                stopHalo()
                print("Halo stopped for "..p.Name)
            else
                startHalo(p)
                print("Halo started for "..p.Name)
            end
        elseif command == "!winter" then
            Events:WaitForChild("ClothesEvent"):FireServer(2, 188003527)
            Events:WaitForChild("FoodItemEvent"):FireServer("Desert")
            print("ClothesEvent and FoodItemEvent fired for CloveDay!")
        end
    end)
end)

if isCloveDay() then
    warn("HAPPY CLOVEDAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
end
