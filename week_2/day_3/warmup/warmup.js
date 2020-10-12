var stringArray = ["cake", "", "pudding", " "];

function countEmpty(stringArray) {
    counter = 0;
    for (var i = 0; i < stringArray.length; i++) {
        // if (stringArray[i] === "") {
        //     counter += 1;
        // };

        // if (stringArray[i].trim() == "") {
        //     counter++;
        // };

        // ! determines the values associated true/false value.
        // returns the opposite of the associated true/false value.
        // so if value is falsy it will return true (i.e. empty string is falsy)
        if (!stringArray[i] || !stringArray[i].trim()) {
            counter++;
        };
    };
    return counter;
};

console.log(countEmpty(stringArray)); // 2

console.log(countEmpty(["cake", "pudding", ""])); // 1
console.log(countEmpty(["cake"])); // 0
console.log(countEmpty(["cake", "", "pudding", ""])); // 2