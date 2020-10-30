var integerOccurancesCount = {}


function isOdd(num) {
    return num % 2 === 1;
}


function addAndCountIntToObj(obj, index) {
    if (obj[index] === undefined) {
        obj[index] = 1;
    } else {
        obj[index] ++;
    }
}


function countIntOccurances(arrayOfIntegers) {
    arrayOfIntegers.forEach(integer => addAndCountIntToObj(integerOccurancesCount, integer));
}


countIntOccurances([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])


function findFirstSingleOddInteger(occuranceCountObj) {
    for (var integer in occuranceCountObj) {
        var integerOccuranceCount = occuranceCountObj[integer];
        if (isOdd(integerOccuranceCount)) {
            return integer;
        }
    }
}


console.log(findFirstSingleOddInteger(integerOccurancesCount));