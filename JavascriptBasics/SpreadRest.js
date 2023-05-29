// used to copy array 

hobbies = ['john','jack','noob']

// const copyArray = hobbies.slice() // to copy

// using spread operator to copy array

const copyArray = [...hobbies]

console.log(copyArray)


// rest operator 

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4))