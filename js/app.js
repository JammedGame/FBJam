window.onload = function()
{
    //console.log(Engineer.Settings.Version);
    FBInstant.initializeAsync().then(function()
    {
        loading();
    });
};