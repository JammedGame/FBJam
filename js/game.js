function preload() {}
function create() {}
function update() 
{
    if(dead) return;
    if(gameObjects["fog"]) game.world.bringToTop(gameObjects["fog"]);
    updateBall();
    updateLevel();
    updateBack();
    checkStatus();
}

var factor = window.innerWidth / 270.0;

var game = new Phaser.Game(270 * factor, 480 * factor, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var gameObjects = {};

var loadProgress = 5;

var loadFinished = false;

function checkLoadFinished()
{
    if(loadProgress >= 100 && !loadFinished)
    {
        loadFinished = true;
        FBInstant.startGameAsync().then(function()
        {
            
        });
    }
}

function loadScene()
{
    var game_layer = game.add.group();
    var fog_layer = game.add.group();
    var ui_layer = game.add.group();

    game.world.bringToTop(fog_layer);
    //game.world.bringToTop(ui_layer);

    game.input.mouse.capture = true;

    game.load.image('back', 'img/back.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["back"] = game_layer.create(0, -240 * factor, 'back');
        gameObjects["back"].height = 720 * factor;
        gameObjects["back"].width = 270 * factor;
        gameObjects["back2"] = game_layer.create(0, -960 * factor, 'back');
        gameObjects["back2"].height = 720 * factor;
        gameObjects["back2"].width = 270 * factor;
        loadProgress += 10;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('fog', 'img/fog.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["fog"] = fog_layer.create(0, 0, 'fog', "");
        gameObjects["fog"].height = 480 * factor;
        gameObjects["fog"].width = 270 * factor;
        game.world.bringToTop(gameObjects["fog"]);
        loadProgress += 10;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.spritesheet('ball', 'img/ball.png', 128, 128);
    game.load.onLoadComplete.add(function()
    {
        gameObjects["ball"] = game_layer.create((135 - 22) * factor, (410 - 22) * factor, 'ball');
        gameObjects["ball"].animations.add('roll');
        gameObjects["ball"].height = 44 * factor;
        gameObjects["ball"].width = 44 * factor;
        loadProgress += 30;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('stone0', 'img/stone0.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 15;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('stone1', 'img/stone1.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 15;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('stone2', 'img/stone2.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 15;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();
}