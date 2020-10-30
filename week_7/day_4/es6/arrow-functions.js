// function declaration
function double(num) {
    return num * 2
}
console.log(double(5));

// function expression
// functions are values
// variable     // expression
const double2 = function(num) { return num * 2 }
console.log(double2(5));


// arrow functions
const double3 = (num) => { return num * 2 }
console.log(double3(5));

// only time no brackets is with 1 parameter
const double4 = num => { return num * 2 }
console.log(double4(5));

// pure function
const double5 = num => num * 2
console.log(double5(5));

// rewriting function declarations as arrow
function hello() {
    console.log('hi there')
}

const hello = () => { console.log('hi there') }