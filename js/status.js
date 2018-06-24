var dead = false;
var deadScoreSaved = false;

function checkStatus()
{
    if(!gameObjects["ball"]) return;
    for(var i = 0; i < stones.length; i++)
    {
        if(stones[i].lane == lane)
        {
            if(Math.abs(stones[i].y - gameObjects["ball"].y) < 50 * factor)
            {
                dead = true;
                speed = 0;
                stopBallAnim();
                gameObjects["gameover"].visible = true;
                score.style.top = 253*factor + "px";
                if(playerID && !deadScoreSaved)
                {
                    deadScoreSaved = true;
                    saveScore(playerID, playerName, playerImage, Math.floor(offset / 100));
                }
                break;
            }
        }
    }
}