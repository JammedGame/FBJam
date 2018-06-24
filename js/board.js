function saveScore(playerID, playerName, playerImage, score)
{
    FBInstant
    .getLeaderboardAsync('Scores')
    .then(leaderboard =>
    {
        return leaderboard.setScoreAsync(score, "Scores");

    })
    .then(() => getScores())
    .catch(error => console.error(error));
}

var scores = [];

function updateBoard()
{
    for(var i = 0; i < 5; i++)
    {
        var entry = document.getElementById("ent"+i);
        if(scores[i])
        {
            entry.style.display = "block";
            var name = document.getElementById("ent"+i+"name");
            name.innerText = scores[i].player.name;
            var score = document.getElementById("ent"+i+"score");
            score.innerText = scores[i].score;
            var img = document.getElementById("img"+i);
            img.src = scores[i].player.img;
        }
        else entry.style.display = "none";
    }
}

function getScores()
{
    scores = [];
    FBInstant
    .getLeaderboardAsync('Scores')
    .then(leaderboard => leaderboard.getEntriesAsync(5, 0))
    .then(entries =>
    {
        for(let i = 0; i < entries.length; i++)
        {
            var player = {name:entries[i].getPlayer().getName(), img:entries[i].getPlayer().getPhoto()}
            scores.push({score:entries[i].getScore(), player:player});
        }
        updateBoard();
    })
    .catch(error => console.error(error));
}

var boardVisible = false;
var board = document.getElementById("score-board");

function toggleBoards()
{
    console.log("boards?");
    if(boardVisible)
    {
        board.style.display = "none";
        boardVisible = false;
    }
    else
    {
        board.style.display = "block";
        boardVisible = true;
    }
}