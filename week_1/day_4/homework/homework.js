// ## The Reading List
console.log("=============\nThe Reading List\n=============");

var books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        hasRead: false
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        hasRead: true      
    },
    {
        title: 'A Game of Thrones',
        author: 'George R. R. Martin',
        hasRead: true         
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J. K. Rowling',
        hasRead: false       
    }
];

for (var i = 0; i < books.length; i++) {
    if (books[i].hasRead) {
    console.log(`You already read "${books[i].title}" by ${books[i].author}`);
    } else {
        console.log(`You still need to read "${books[i].title}" by ${books[i].author}`);
    };
};

// ## The Movie Database
console.log("=============\nThe Movie Database\n=============");

var myFavMovie = {
    title: 'Spectre',
    durationMinutes: 150, 
    stars: ['Daniel Craig', 'Christoph Waltz', 'Léa Seydoux']
};

function describeMovie(movieObject) {
    console.log(`${movieObject.title} lasts for ${movieObject.durationMinutes} minutes. Stars: ${movieObject.stars.join(', ')}.`)
};

describeMovie(myFavMovie);

// # Which number's bigger?
console.log("=============\nWhich number's bigger?\n=============");

function greaterNum(x, y) {
    if (x > y) {
        var result = x;
    } else if (y > x) {
        var result = y;
    } else {
        var result = 'The numbers are equal.'
    };

    return result;
};

var numPairs = [
    [5, 10], 
    [5, 5], 
    [7, 1]
];

for (var i = 0; i < numPairs.length; i++) {
    console.log(`The greater number of ${numPairs[i][0]} and ${numPairs[i][1]} is ${greaterNum(numPairs[i][0], numPairs[i][1])}`);
};

// # The Age Calculator
console.log("=============\nThe Age Calculator\n=============");

function calculateAge(currentYear, birthYear) {
    var age = currentYear - birthYear;
    var ageBeforeBirthDate = currentYear - birthYear - 1;

    return [age, ageBeforeBirthDate];
};

var yearPairs = [
    [2020, 1994],
    [2020, 1991],
    [2020, 1955]
];

for (var i = 0; i < yearPairs.length; i++) {
    console.log(`So you are either ${calculateAge(yearPairs[i][0], yearPairs[i][1])[0]} or ${calculateAge(yearPairs[i][0], yearPairs[i][1])[1]}`);
};

// # The World Translator
console.log("=============\nThe World Translator\n=============");

function helloWorld(languageCode) {
    if (languageCode === 'es') {
        var whatToSay = 'Hola Mundo';
    } else if (languageCode === 'de') {
        var whatToSay = 'Hallo Welt';
    } else {
        var whatToSay = "Hello, World";
    };

    return console.log(whatToSay);
};

helloWorld('en');
helloWorld('es');
helloWorld('de');
helloWorld('edwdwdwwn');

// # The Grade Assigner
console.log("=============\nThe Grade Assigner\n=============");

function assignGrade(score) {
    if (score > 84) {
        var grade = 'A+';
    } else if (score > 74) {
        var grade = 'A';
    } else if (score > 64) {
        var grade = 'B';
    } else if (score > 49) {
        var grade = 'C';
    } else {
        var grade = 'F';
    };

    return grade;
 };

var scores = [10, 55, 67, 81, 99];

for (var i = 0; i < scores.length; i++) {
    console.log(`Your score is: ${scores[i]}. Your grade is: ${assignGrade(scores[i])}`);
};

// # The Pluralizer
console.log("=============\nThe Pluralizer\n=============");

function pluralize(noun, number) {
    if (number == 1) {
        return `${number} ${noun}s`;
    } else {
        return `${number} ${noun}`;
    };
};

var someNounNumPairs = [
    ['dog', 10],
    ['cat', 1],
    ['fish', 50000]
];

for (var i = 0; i < someNounNumPairs.length; i++) {
    console.log(pluralize(someNounNumPairs[i][0], someNounNumPairs[i][1]));
};