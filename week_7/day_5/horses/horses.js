console.log('no horses were harmed during the making of this exercise');

let horses = [
  {
    name: 'maythehorsebewithu',
    active: true,
    country: 'AUS',
    yearOfBirth: 2000,
    hourlyRate: 85,
    daysWorked: 400
  },
  {
    name: 'my wife knows everthing',
    active: true,
    country: 'USA',
    yearOfBirth: 2007,
    hourlyRate: 50,
    daysWorked: 250    
  },
  {
    name: 'better loosen up',
    active: false,
    country: 'AUS',
    yearOfBirth: 1985,
    hourlyRate: 15,
    daysWorked: 200      
  },
  {
    name: 'hoof hearted',
    active: false,
    country: 'AUS',
    yearOfBirth: 1981,
    hourlyRate: 150,
    daysWorked: 100    
  },
  {
    name: 'pony',
    active: false,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 30,
    daysWorked: 700   
  },
  {
    name: 'sunny boy',
    active: true,
    country: 'AUS',
    yearOfBirth: 2003,   
    hourlyRate: 110,
    daysWorked: 515    
  }  
];


// const calcEarnings = horses => {
//     let total = 0
//     horses.forEach(horse => {
//         if (horse.country === 'AUS') {
//             let earning = horse.hourlyRate * 8 * horse.daysWorked
//             if (earning > 30000) {
//                 total += earning
//             }
//         }
//     }
//     )
//     return total
// }

// console.log(calcEarnings(horses))

const isAussie = horse => horse.country === 'AUS'
const lifetimeEarnings = horse => horse.hourlyRate * 8 * horse.daysWorked
const highEarners = earning => earning > 30000
const sumEarnings = (accumulator, currentValue) => accumulator + currentValue

console.log(
    horses
        .filter(isAussie)
        .map(lifetimeEarnings)
        .filter(highEarners)
        .reduce(sumEarnings)
)
