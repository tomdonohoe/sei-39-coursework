console.log('functions:\n===========');

var letters = ['a', 'b', 'c'];

// function goUppercase(arr) {

//     var caps = [];

//     for (var i = 0; i < arr.length; i++) {
//         caps.push(letters[i].toUpperCase());
//     }

//     return caps;
// }

// function gogoUpper(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].toUpperCase()
//     }

//     return arr;
// }

// letters = gogoUpper(letters);

function sayHi() {
    console.log('hi');
}

function horribleAlert() {
    alert('haha');
}

function countDown(startsFrom, func) {
    for (var i = startsFrom; i > 0; i--) {
        console.log(i)
    }
    func();
}