function preload() {}
function create() {}
function update() 
{
    if(dead)
    {
        if(game.input.activePointer.isDown)
        {
            dead = false;
            deadScoreSaved = false;
            score.style.top = "0px";
            Math.floor(offset / 100);
            resetBall();
            resetLevel();
            updateBack();
            return;
        }
    }
    if(gameObjects["fog"]) game.world.bringToTop(gameObjects["fog"]);
    updateBall();
    updateLevel();
    updateBack();
    checkStatus();
}

var factor = window.innerWidth / 270.0;

function setFontSize()
{
    var bicon = document.getElementById("boards-icon");
    bicon.style.fontSize = 30*factor + "px";
    var mainscore = document.getElementById("score");
    mainscore.style.fontSize = 30*factor + "px";
    for(var i = 0; i < 5; i++)
    {
        var name = document.getElementById("ent"+i+"name");
        name.style.fontSize = 12*factor + "px";
        name.style.top = (20+i*30 + 3)*factor + "px";
        var score = document.getElementById("ent"+i+"score");
        score.style.fontSize = 22*factor + "px";
        score.style.top = (20+i*30 - 1)*factor + "px";
        var img = document.getElementById("img"+i);
        img.style.width = 20*factor + "px";
        img.style.height = 20*factor + "px";
        img.style.top = (i*4 + 3)*factor + "px";
    }
}

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
            playerName = FBInstant.player.getName();
            playerImage = FBInstant.player.getPhoto();
        });
    }
}

var game_layer;
var fog_layer;
var ui_layer;

function loadScene()
{
    setFontSize();

    game.load.audio('boden', ['img/trance.mp3']);
    game.load.onLoadComplete.add(function()
    {
        var music = game.add.audio('boden');
        music.play();

    }, this);
    game.load.start();

    game_layer = game.add.group();
    fog_layer = game.add.group();
    ui_layer = game.add.group();

    game.world.bringToTop(fog_layer);
    game.world.bringToTop(ui_layer);

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
        loadProgress += 25;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('play', 'img/play.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["play"] = ui_layer.create(0, 0, 'play');
        gameObjects["play"].height = 480 * factor;
        gameObjects["play"].width = 270 * factor;
        loadProgress += 8;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('gameover', 'img/gameover.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["gameover"] = ui_layer.create(0, 0, 'gameover');
        gameObjects["gameover"].height = 480 * factor;
        gameObjects["gameover"].width = 270 * factor;
        gameObjects["gameover"].visible = false;
        loadProgress += 9;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('stone0', 'img/stone0.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 11;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('stone1', 'img/stone1.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 11;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    game.load.image('stone2', 'img/stone2.png');
    game.load.onLoadComplete.add(function()
    {
        loadProgress += 11;
        FBInstant.setLoadingProgress(loadProgress);
        checkLoadFinished();

    }, this);
    game.load.start();

    score.style.fontSize = 30 * factor;
}