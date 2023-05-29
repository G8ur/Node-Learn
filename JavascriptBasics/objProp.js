const person = {
    name: 'Max',
    age : 25,
    greet : () => {
        console.log('Hi, I am ' + this.name)  // this is used to call variable inside of that object
    }
}

person.greet()

// dont use arrow function in object


