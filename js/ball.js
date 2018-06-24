var offset = 0;

var speed = 0;

var lane = 0;

var mouseDown = false;
var mouseHandled = false;
var mouseX = 0;

var score = document.getElementById("score");

function resetBall()
{
    offset = 0;
    score.innerText = Math.floor(offset / 100);
    lane = 0;
    speed = 0;
    gameObjects["play"].visible = true;
    gameObjects["gameover"].visible = false;
    mouseDown = false;
    mouseHandled = true;
    mouseX = 0;
    updateBallPosition();
}

function updateBall()
{
    mouseDown = game.input.activePointer.isDown;
    if(!mouseDown) mouseHandled = false;
    mouseX = game.input.activePointer.x;
    if(mouseDown) changeLane();
    offset += speed * factor;
    if(speed != 0) speed += 0.003;
    score.innerText = Math.floor(offset / 100);
}

function playBallAnim()
{
    gameObjects["ball"].animations.play('roll', 12, true);
}

function stopBallAnim()
{
    gameObjects["ball"].animations.stop('roll', 0);
}

function updateBallPosition()
{
    gameObjects["ball"].x = (135 - 22) * factor + lane * 60 * factor;
}

function changeLane()
{
    if(mouseHandled) return;
    if(speed == 0)
    {
        speed = 3;
        playBallAnim();
        gameObjects["play"].visible = false;
        mouseHandled = true;
        return;
    }
    if(mouseX > 135 * factor)
    {
        if(lane != 1) lane++;
    }
    else
    {
        if(lane != -1) lane--;
    }
    mouseHandled = true;
    updateBallPosition();
}

function down(event)
{
    mouseDown = true;
    mouseX = event.x;
}

function up(event)
{
    mouseDown = up;
}

//document.getElementById("bod").addEventListener("mousedown", down);
//document.getElementById("bod").addEventListener("mouseup", up);