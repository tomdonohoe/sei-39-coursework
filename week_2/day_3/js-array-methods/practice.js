// join
console.log("==========\narr.join\n==========")
var fullName = ['Thomas', 'Jordan', 'Donohoe'];

console.log(fullName.join()); // string: 'Thomas, Jordan, Donohoe'

console.log(fullName.join(' ')); // string: 'Thomas Jordan Donohoe'

// indexOf
console.log("==========\narr.indexOf\n==========")
var multiplesOfFive = [5, 10, 15, 20, 25, 30];

console.log(multiplesOfFive.indexOf(15)); // 2
console.log(multiplesOfFive.indexOf(7)); // -1

// push
console.log("==========\narr.push\n==========")
var hobbies = ['golf'];

console.log(hobbies.push('mtb', 'camping', 'hiking')); // logs: 4
console.log(hobbies); // logs: ['golf', 'mtb', 'camping', 'hiking']

// pop
console.log("==========\narr.pop\n==========")
var fruits = ['banana', 'apple', 'madarin', 'orange'];

console.log(fruits.pop()); // logs: 'orange'
console.log(fruits); // ['banana', 'apple', 'madarin']

// shift
console.log("==========\narr.shift\n==========")
var multiplesOfTwo = [2, 4, 6, 8, 10];

console.log(multiplesOfTwo.shift()); // 2
console.log(multiplesOfTwo); // [2, 4, 6, 8]

// unshift
console.log("==========\narr.unshift\n==========")
var multiplesOfThree = [6, 9, 12, 15];

console.log(multiplesOfThree.unshift(3)); // 5
console.log(multiplesOfThree); // [3, 6, 9, 12, 15]

// slice
console.log("==========\narr.slice\n==========")
              // 0   1  2  3  4  5  6  7
var countingUp = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(countingUp.slice(3)); // [4, 5, 6, 7, 8]
console.log(countingUp.slice(2, 4)); // [ 3, 4]

// reverse
console.log("==========\narr.reverse\n==========")
var countingDown = [5, 4, 3, 2, 1];

console.log(countingDown.reverse()); // [1, 2, 3, 4, 5]

// includes
console.log("==========\narr.includes\n==========")
var family = ['Mick', 'Jane', 'Tom', 'Jess', 'Fatima'];

console.log(family.includes('Fatima')); // true
console.log(family.includes('jarrod')); // false

// concat
console.log("==========\narr.concat\n==========")
var row1 = [1, 2, 3, 4, 5];
var row2 = [6, 7, 8, 9, 10];
var row3 = [11, 12, 13, 14, 15];

console.log(row1.concat(row2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(row1.concat(row2, row3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];