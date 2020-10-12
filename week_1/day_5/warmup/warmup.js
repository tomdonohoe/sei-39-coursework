var year = 1920;
var endYear = 2020;

// Every 4 years
for (year; year <= endYear; year++) {
    if (year % 4 == 0) {
        console.log(year);
    };
};

console.log('=======');

// Gregorian calendar
var gYear = 1920;
var gEndYear = 2020;

for (gYear; gYear <= gEndYear; gYear++) {
    if (gYear % 4 == 0 && gYear % 100 == 0) {
        if (gYear % 400 == 0) {
            console.log(gYear);
        };
    };   
};