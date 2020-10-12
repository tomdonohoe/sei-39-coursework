var listElements = document.querySelectorAll('.checklist li')
var resetBtn = document.querySelector('button')

function strike(event) {
    // if (event.target.className === '') {
    //     event.target.classList.add('completed-item')
    // } else {
    //     event.target.classList.remove('completed-item')
    // }
    event.target.classList.toggle('completed-item')
}

function resetStyle() {
    for (var i = 0; i < listElements.length; i++) {
        listElements[i].classList.remove('completed-item')
    }
}

for (var i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener('click', strike)
}

resetBtn.addEventListener('click', resetStyle)
