local player = game.Players.LocalPlayer
local energyValue = player:WaitForChild("Energy") 

local lastEnergy = energyValue.Value
local timeSinceChange = 0
local checkInterval = 0.1

while true do
    task.wait(checkInterval)
    
    local currentEnergy = energyValue.Value
    
    if currentEnergy == lastEnergy then
        timeSinceChange = timeSinceChange + checkInterval
    else
        timeSinceChange = 0
        lastEnergy = currentEnergy
    end
    
    if timeSinceChange >= 1 and currentEnergy < 15 then
        energyValue.Value = 15
        timeSinceChange = 0 
        lastEnergy = 15
    end
end
