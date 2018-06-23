function preload() {}
function create() {}
function update() {}

var factor = window.innerWidth / 270.0;

var game = new Phaser.Game(270 * factor, 480 * factor, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var gameObjects = {};

var loadProgress = 0;

function loadScene() {

    game.load.image('back', 'img/back.png');
    game.load.onLoadComplete.add(function()
    {
        gameObjects["back"] = game.add.sprite(0, 0, 'back');
        gameObjects["back"].height = 720 * factor;
        gameObjects["back"].width = 270 * factor;
        loadProgress += 50;
        FBInstant.setLoadingProgress(loadProgress);

    }, this);
    game.load.start();
}