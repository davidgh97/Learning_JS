// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 2, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const person = {
    name: 'David',
    age: '27',
    hobbies: ['racing', 'cooking', 'dogs'],
    favorite_game: 'iRacing', 
}

// Write a function that takes the array ['a', 'c', 'b', 'c', 'a', 'a'] as input and returns a dictionary of key-value pairs,
// where the key is a letter in the array and the value is the number of instances of that letter in the array.

/*
    1) create an array letters: ['a', 'c', 'b', 'c', 'a', 'a']
    2) count as many times a letter appears
    3) return an object where key = a letter and the value = number of times is shows up
*/

// let letters = ['a', 'c', 'b', 'c', 'a', 'a'],
//     freshObj = {};

// for (let i = 0; i < letters.length; i++) {
//     console.log(freshObj)
//     console.log(`${letters[i]}`)
//     if (`${letters[i]}` in freshObj) {
//         freshObj[`${letters[i]}`] += 1;
//         console.log( `TEST TEST `)
//     } else {
//         freshObj[`${letters[i]}`] = 1;
//         console.log( `TEST TEST TEST TEST `)
//     }
//     console.log(freshObj)
//     console.log("~<~ ������������������������������ ~>~")
// }

// console.log(freshObj)
// console.log(JSON.stringify(freshObj))


// let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function arrayFilter(arr) {
//     let new_array = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             continue
//         }
//         new_array.push(arr[i])
//     }

//     return new_array
// }

// let filtered_array = arrayFilter(integers)
// console.log(`The new array is ${[filtered_array]}`)

//  *********** Error handeling andd debugging. Try catch method ***********

const brokenObject = {
    word : 'nice'
}

function problematicCode() {
    try {
        console.log(`Attempted the TRY block`)
        const subObject = brokenObject.hello.world
        console.log(subObject)
    } catch (err) {
        console.error(err.message)
    }
}

problematicCode()

setTimeout(() => {
    function throwError() {
        try {
            throw new Error('CUSTOM ERROR MESSAGE')
        } catch (err) {
            console.error(err.message)
        }
    }
    
    throwError()
    
}, 10000);
console.log(`The code continued to execute`)


