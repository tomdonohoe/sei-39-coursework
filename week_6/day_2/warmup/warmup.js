function evenMultiples(listOfNumbers) {
    return listOfNumbers.filter(num => num % 2 == 0 && num % 5 == 0);
}