function getSquares(numArray) {
    var squares = []
    for (var i = 0; i < numArray.length; i++) {
        if (Math.sqrt(numArray[i]) % 1 === 0) {
            if (!squares.includes(numArray[i])) {
                squares.push(numArray[i]);
            }
        }
    }
    return squares.sort(function(a, b){return a - b});
}