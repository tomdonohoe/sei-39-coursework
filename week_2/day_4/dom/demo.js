var elem = document.querySelector('button');

function doSomething() {
    document.querySelector('h1').textContent = 'hi again';
}

elem.addEventListener('click', doSomething);