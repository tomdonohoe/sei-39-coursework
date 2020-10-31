function sayHello(name) {
    console.log(`Hello, ${name}!`)
}


const sayHello1 = function(name) {
    console.log(`Hello, ${name}!`)
}


const sayHello2 = (name) => {
    console.log(`Hello, ${name}!`)
}


const sayHello3 = name => {
    console.log(`Hello, ${name}!`)
}


const sayHello4 = name => console.log(`Hello, ${name}!`)


const sayHello5 = name => { console.log(`Hello, ${name}!`) }


sayHello('Tom')
sayHello1('Tom')
sayHello2('Tom')
sayHello3('Tom')
sayHello4('Tom')
sayHello5('Tom')