function preload() {}
function create() {}
function update() 
{
    updateBall();
    updateBack();
}

var factor = window.innerWidth / 270.0;

var game = new Phaser.Game(270 * factor, 480 * factor, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var gameObjects = {};

var loadProgress = 0;

function loadScene() {

    game.load.image('back', 'img/back.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["back"] = game.add.sprite(0, -240, 'back');
        gameObjects["back"].height = 720 * factor;
        gameObjects["back"].width = 270 * factor;
        loadProgress += 50;
        FBInstant.setLoadingProgress(loadProgress);

    }, this);
    game.load.start();

    game.load.image('ball', 'img/ball.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["ball"] = game.add.sprite((135 - 22) * factor, (440 - 22) * factor, 'ball');
        gameObjects["ball"].height = 44 * factor;
        gameObjects["ball"].width = 44 * factor;
        loadProgress += 50;
        FBInstant.setLoadingProgress(loadProgress);

    }, this);
    game.load.start();
}