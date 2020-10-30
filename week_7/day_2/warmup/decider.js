var coin = document.querySelector('.coin');
var result = document.querySelector('.result');


function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function coinFlip() {
    var randNum = getRandomInt(0, 2);
    if (randNum === 0) {
        return "HEADS";
    } else {
        return "TAILS";
    }
}


function showCoinFlipResult() {
    var resultText = coinFlip();
    result.textContent = resultText;
}


coin.addEventListener('click', showCoinFlipResult);