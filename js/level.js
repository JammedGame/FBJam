var stones = [];

var loadedElements = 0;

var stoner;

var updateLevelCurrent = false;

function updateLevel()
{
    if(updateLevelCurrent) return;
    updateLevelCurrent = true;
    for(var i = 0; i < stones.length; i++)
    {
        stones[i].y += speed * factor;
    }
    for(var i = stones.length - 1; i >= 0; i--)
    {
        if(stones[i].y > 720 * factor)
        {
            this.game.world.remove(stones[i]);
            stones.splice(i,1);
        }
    }
    var offDiff = Math.floor(offset / (240 * factor) + 1) - loadedElements;
    var oldLoaded = loadedElements;
    loadedElements += offDiff;
    if(offDiff < 0) offDiff = 0;
    for(var i = 0; i < offDiff; i++)
    {
        if(oldLoaded + i < 3) continue;
        var variation = Math.floor(Math.random() * 9);
        if(variation < 6)
        {
            var lane = Math.floor(Math.random() * 3) - 1;
            var art = Math.floor(Math.random() * 3);
            var stone = game.add.sprite((135 - 27 + lane * 60) * factor, (-(oldLoaded + i) * 240 - 27) * factor, 'stone'+art);
            stone.height = 54 * factor;
            stone.width = 54 * factor;
            stone.lane = lane;
            stone.z = 0.2;
            stones.push(stone);
        }
        else if(variation < 9)
        {
            var lane = Math.floor(Math.random() * 3) - 1;
            var art = Math.floor(Math.random() * 3);
            var stone = game.add.sprite((135 - 27 + lane * 60) * factor, (-(oldLoaded + i) * 240 - 27) * factor, 'stone'+art);
            stone.height = 54 * factor;
            stone.width = 54 * factor;
            stone.z = 0.2;
            stone.lane = lane;
            stones.push(stone);

            var lane2 = Math.floor(Math.random() * 3) - 1;
            if(lane2 == lane)
            {
                if(lane == -1) lane2 = 0;
                else if(lane == 1) lane2 = 0;
                else lane2 = -1;
            }
            art = Math.floor(Math.random() * 3);
            stone = game.add.sprite((135 - 27 + lane2 * 60) * factor, (-(oldLoaded + i) * 240 - 27) * factor, 'stone'+art);
            stone.height = 54 * factor;
            stone.width = 54 * factor;
            stone.z = 0.2;
            stone.lane = lane2;
            stones.push(stone);
        }
    }
    updateLevelCurrent = false;
}