// let colors = document.querySelectorAll('.colors p')
// colors.forEach(color => console.log(color.textContent))


let numbers = [1, 2, 3, 4, 5];

// const logNum = function(num) {
//     console.log(num)
// }

const logNum = num => console.log(num)

numbers.forEach(logNum)
