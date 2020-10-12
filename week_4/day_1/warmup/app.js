var youSay;

while (youSay !== 'BYE') {
    youSay = prompt('ask grandma a question');

    if (youSay !== youSay.toUpperCase()) {
        alert("HUH?! SPEAK UP, SONNY!");
    } else {
        alert("NO, NOT SINCE 1938!");
    }
}