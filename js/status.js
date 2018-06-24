var dead = false;

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
                break;
            }
        }
    }
}