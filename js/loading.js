var loading = function()
{
    FBInstant.setLoadingProgress(5);
    loadScene();
    FBInstant.setLoadingProgress(100);
    FBInstant.startGameAsync().then(function()
    {
        
    });
}