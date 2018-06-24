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

var loadProgress = 5;

function loadScene() {

    game.load.image('back', 'img/back.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["back"] = game.add.sprite(0, -240 * factor, 'back');
        gameObjects["back"].height = 720 * factor;
        gameObjects["back"].width = 270 * factor;
        gameObjects["back2"] = game.add.sprite(0, -960 * factor, 'back');
        gameObjects["back2"].height = 720 * factor;
        gameObjects["back2"].width = 270 * factor;
        loadProgress += 35;
        FBInstant.setLoadingProgress(loadProgress);

    }, this);
    game.load.start();

    game.load.image('ball', 'img/ball.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["ball"] = game.add.sprite((135 - 22) * factor, (410 - 22) * factor, 'ball');
        gameObjects["ball"].height = 44 * factor;
        gameObjects["ball"].width = 44 * factor;
        loadProgress += 20;
        FBInstant.setLoadingProgress(loadProgress);
        if(loadProgress)
        FBInstant.startGameAsync().then(function()
        {
            
        });

    }, this);
    game.load.start();

    game.load.image('stone0', 'img/stone0.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 20;
        FBInstant.setLoadingProgress(loadProgress);

    }, this);
    game.load.start();

    game.load.image('stone1', 'img/stone1.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 20;
        FBInstant.setLoadingProgress(loadProgress);

    }, this);
    game.load.start();
}