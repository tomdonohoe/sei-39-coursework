var bowl = document.querySelector('.bowl');
var flusher = document.querySelector('.flush-btn');

function poop() {
    bowl.style.backgroundColor = 'darkolivegreen'
}

function flush() {
    bowl.style.backgroundColor = 'mintcream'
}

bowl.addEventListener('click', poop);
flusher.addEventListener('click', flush);