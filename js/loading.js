var loading = function()
{
    loadScene();
    FBInstant.setLoadingProgress(100);
    FBInstant.startGameAsync().then(function()
    {
        
    });
}