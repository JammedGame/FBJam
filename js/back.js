function updateBackLocation()
{
    var diffOffset = offset % (720 * factor);
    if(!gameObjects["back"]) return;
    gameObjects["back"].y = -240 * factor + diffOffset;
    if(!gameObjects["back2"]) return;
    gameObjects["back2"].y = -960 * factor + diffOffset;
}

function updateBack()
{
    updateBackLocation();
}