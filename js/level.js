import { Random } from "engineer-js";

var stones = [];

var loadedElements = 0;

function updateLevel()
{
    for(var i = 0; i < stones.length; i++)
    {
        stones[i].y = stones[i].baseY + offset;
    }
    for(var i = stones.length; i >= 0; i--)
    {
        if(stones[i].y > 720) stones.splice(i,1);
    }
    var offDiff = (offset % 240 + 5) - loadedElements;
    for(var i = 0; i < offDiff; i++)
    {
        if(loadedElements + i < 3) continue;
        var variation = Math.floor(Math.random() * 9);
        if(variation == 0 || variation == 1)
        {
            
        } 
    }
}