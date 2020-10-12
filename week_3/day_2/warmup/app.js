var players = [
    {
        name: 'Bob',
        scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
    },
    {
        name: 'Jimbo',
        scores: [5, 12, 9, 22, 13, 7, 16, 10, 11] 
    },
    {
        name: 'Fish',
        scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
    },
    {
        name: 'TOm',
        scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
    }
];

function totalScores(scoreCard) {
    var playersTotalScores = [];
    for (var i = 0; i < scoreCard.length; i++) {
        var playerScore = 0;
        for (var j = 0; j < scoreCard[i].scores.length; j++) {
            playerScore += scoreCard[i].scores[j];
        }
        console.log(`${scoreCard[i].name} score was: ${playerScore}`);
        playersTotalScores.push(playerScore)
    }
    var playersCombinedScore = 0;
    for (var k = 0; k < playersTotalScores.length; k++) {
        playersCombinedScore += playersTotalScores[k];
    }
    console.log(`Players combined total is: ${playersCombinedScore}`);
}