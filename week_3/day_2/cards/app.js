var spans = document.querySelectorAll('span');
var btn = document.querySelector('button');
var main = document.querySelector('main');

function handleClick(event) {
    event.target.classList.toggle('make-disappear');
}


function toggleMode(event) {
    for (var i = 0; i < spans.length; i++) {
        spans[i].classList.toggle('mode')
    }
}

for (var i = 0; i < spans.length; i++) {
    spans[i].addEventListener('click', handleClick);
}


btn.addEventListener('click', toggleMode)