function calculate() {
    var numberOne = document.querySelector('.num1').value;
    var numberTwo = document.querySelector('.num2').value;

    return Number(numberOne) + Number(numberTwo);
}

function updateText() {
    result = calculate();
    var answerSpan = document.querySelector('.answer');
    answerSpan.textContent = result;
}

var calcBtn = document.querySelector('button');
calcBtn.addEventListener('click', updateText);