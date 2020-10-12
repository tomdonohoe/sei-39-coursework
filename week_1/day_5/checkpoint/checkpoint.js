// Variables
console.log('==============\nVariables\n==============');

var captain = 'Jack';
var phrase = `Oh ${captain}, my ${captain}`;

// Arrays & Loops
console.log('==============\nArrays & Loops\n==============');

var days = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var i = 0; i < days.length; i++) {
    console.log(`${i} ${days[i]}`);
};

var prices = [20, 10, 10, 7, 12, 50, 13];
var totalPrice = 0;

for (var i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
};

console.log(totalPrice);

// Objects
console.log('==============\nObjects\n==============');

var brain = {
    energyLevel: 10
  };

brain.energyLevel = 1000;
brain.dream = 'electric sheep';

var dog = {
    name: 'fluffy',
    age: 4,
    hairColor: 'pink',
    toys: ['bone', 'pizza', 'donut']
  };

console.log(Object.keys(dog));

for (var i = 0; i < dog.toys.length; i++) {
    console.log(dog.toys[i]);
};

// Functions
console.log('==============\nFunctions\n==============');

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    } else {
        return false;
    };
};

var result = isOdd(6);

function min(numOne, numTwo, numThree) {
    var smallestNum = numOne;
    var otherNums = [numTwo, numThree];

    for (var i = 0; i < otherNums.length; i++) {
        if (otherNums[i] < smallestNum) {
            smallestNum = otherNums[i];
        };
    };

    return smallestNum;
};


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
};