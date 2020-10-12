var boxes = document.querySelectorAll('.box');


function checkRed() {
    var redBoxes = document.querySelectorAll('.red');
    if (redBoxes.length === boxes.length) {
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('green');
        }
    }
}


function handleClick(event) {
    event.target.classList.toggle('red');
    checkRed();
}


for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', handleClick)
}