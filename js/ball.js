var offset = 0;

var speed = 0;

var lane = 0;

function updateBall()
{
    offset += speed * factor;
    if(speed != 0) speed += 0.003;
}

function updateBallPosition()
{
    gameObjects["ball"].x = (135 - 22) * factor + lane * 60 * factor;
}

function changeLane(event)
{
    if(speed == 0)
    {
        speed = 3;
        return;
    }
    if(event.x > 135 * factor)
    {
        if(lane != 1) lane++;
    }
    else
    {
        if(lane != -1) lane--;
    }
    updateBallPosition();
}

window.addEventListener("click", changeLane);