// map filter reduce - array methods
// immutable methods --> does not change original. returns new array
let numbers = [1, 2, 3, 4];

let doubledNumbers = numbers.map(num => num * 2)

console.log(doubledNumbers)


let evenNumbers = numbers.filter(num => num % 2 == 0)

console.log(evenNumbers)


let accounts = [
    { bal: 100},
    { bal: 10}
]

console.log(accounts.map(acc => acc.bal))

let fruits = ['yo', 'do', 'bro']

var items = [
    { name: 'apple', type: 'fruit', full_price: 2, discount: 0 },
    { name: 'banana', type: 'fruit', full_price:4, discount: 1 },
    { name: 'orange', type: 'fruit', full_price: 3, discount: 2 },
    { name: 'potato', type: 'vegie', full_price: 5, discount: 0 },
    { name: 'brocoli', type: 'vegie', full_price: 2, discount: 2 },
  ]

// calculate total price of fruits after discount
console.log('====')

const isFruit = item => item.type === 'fruit'
const discount = item => item.full_price - item.discount
const sum = (accum, currentValue) => accum + currentValue

console.log(
    items
        .filter(isFruit) 
        .map(discount)
        .reduce(sum)
)