var playerID;
var playerName;
var playerImage;
window.onload = function()
{
    console.log(FBInstant.player);
    //console.log(Engineer.Settings.Version);
    FBInstant.initializeAsync().then(function()
    {
        playerID = FBInstant.player.getID();
        getScores();
        loading();
    });
};