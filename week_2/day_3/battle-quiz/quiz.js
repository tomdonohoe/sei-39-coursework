// Q1
var basket = ["grape", "banana", "apple", "orange"];
basket.pop("grape");
console.log(basket.indexOf("banana"));

// Q2
var quiz = ["A1", "B4", "D6", "C5"];
var quiz2 = ["A2", "E4", "D9", "J2"];

var xjasbndbakjbjo = quiz.concat(quiz2.reverse()).reverse();
console.log(xjasbndbakjbjo.indexOf("E4"));

// Q3
const words = ['couches', 'bed', 'dog', 'egg', 'plant', 'apple'];
const result = words.filter(word => word.length > 3);
const final = result.slice(1);
console.log(final);

// Q4
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
for (var i = 0; i < fruits.length; i ++) {
    i = fruits;
    console.log(i);
}

// Q5
var numbers = [1, 2, 3, 4, 77,'log me', 10];
function iLikeToLog(arr) {
    var result = [];
    numbers.unshift(null);
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            result.push(arr[i]);
        };
    };
    return result[0];
};
console.log(iLikeToLog(numbers));
