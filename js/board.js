function saveScore(playerID, playerName, playerImage, score)
{
    FBInstant
    .getLeaderboardAsync('Scores')
    .then(leaderboard =>
    {
        return leaderboard.setScoreAsync(score, "Scores");
    })
    .then(() => console.log('Score saved'))
    .catch(error => console.error(error));
}

var scores = [];

function getScores()
{
    scores = [];
    FBInstant
    .getLeaderboardAsync('Scores')
    .then(leaderboard => leaderboard.getEntriesAsync(10, 0))
    .then(entries =>
    {
        for(let i = 0; i < entries.length; i++)
        {
            var player = {name:entries[i].getPlayer().getName(), img:entries[i].getPlayer().getPhoto()}
            scores.push({score:entries[i].getScore(), player:player});
        }
    })
    .catch(error => console.error(error));
}