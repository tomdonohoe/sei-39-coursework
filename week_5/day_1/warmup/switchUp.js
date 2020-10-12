function switchUp(str) {
    var str_switched = [];
    for (var letter = 0; letter < str.length; letter++) {
        if (str[letter] === str[letter].toUpperCase()) {
            str_switched.push(str[letter].toLowerCase());
        } else {
            str_switched.push(str[letter].toUpperCase());
        }
    }
    return str_switched.join('')
}