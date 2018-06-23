function updateBackLocation()
{
    if(!gameObjects["back"]) return;
    gameObjects["back"].y = -240 + offset;
}

function updateBack()
{
    updateBackLocation();
}