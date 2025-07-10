// // 1. How do you create a string that includes both static text and the value of the variable name, using template literals?
// let myName = "Lilo",
//     whatWeWant = `Hi, I am $[myName} and I am 4]years old`

// console.log(whatWeWant)


// // 2. Convert the following function into an arrow function syntax:
// function add(a, b) {
//     return a + b;
// }

// //the converted function
// let convertedFunction = (a, b) => {
//     return a + b;
// }

// console.log(convertedFunction(3,8))

// // 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.
// let person = {
//     theName: "David",
//     theAge: 27
// }

// const { theName, theAge } = person;
// console.log(theName)
// console.log(theAge)

// const { theName: cocoJambo, theAge: secretAge } = person;
// console.log(cocoJambo)
// console.log(secretAge)

// // 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.
// let colors = ['red', 'green', 'blue'];

// const [ random1, blabla, wdawd ] = colors;

// console.log(random1, blabla, wdawd)

// // 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
// let arr1 = [1, 2, 3, 7, 9]
// let arr2 = [4, 5, 6, 7, 9]

// let theNewArray = [...arr1, ...arr2]
// console.log(theNewArray)

// // 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?
// let obj1 = { name: 'henry', age: 14 }
// let obj2 = { name: 'gregothy', color: 'blue' }
// let obj3 = { name: 'david', hobby: 'painting' }

// let newCrazyObj = {...obj1, ...obj2, ...obj3};
// console.log(newCrazyObj)    

// // 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?
// const user = { name: 'david' }
// console.log(user?.address?.street)

// // 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".
// const greet = (name, greeting = "Hello") => {
//     console.log(name, greeting)
// }

// greet('David', 'Ciao')

// 9. Explain the difference between let and const keywords, and give an example of when you would use each.
// BOTH "let" and "const" are block-scoped
// the "let" keyword was introduced in ES6 in order to replace the deprecated and clumsy "var". It is used in cases where the value is temporary / it will be changed
// i.e: for (let i = 0; i < 5; i++) { console.log(i); }
// the "const" keyword has also appeared with ES6 and it is used for values that should not be reassigned or for fixed references
// i.e: const API_URL = "https://api.example.com";
//      const colors = ["red", "green", "blue"];

// 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.   
// let new_array = [1, 2, 3, 4, 'mama', 'tata', 1512, 3.311, 666]
//     let daNewTing = new_array.map((element) => {
//         console.log(element)    
//         return typeof element === 'number' ? element + 1 : element; // checks if the element is a number and adds +1 to it. If it is anything other than a number, it just pushes the element
//         //return element + 1;
//     })
// console.log(new_array)
// console.log('<><><>')
// console.log(daNewTing);


// 11. Given an array of numbers, use the map method to create a new array with each number squared.
let original_array = [2, 4, 5, 6, 8, 93],
    newArray = original_array.map((element) => {
        return Math.pow(element, 2); // || element * element || element ** 2
    })
console.log( newArray)

// 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?

let age = 15,
    ageStatus = age >= 18 ? "adult" : "minor";

    console.log(ageStatus)

// 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?
let isLoggenIn = true;

const logMessage = () => {
    console.log("this has been logged")
}

isLoggenIn && logMessage()
//
// equivalent to: if (isLoggenIn) {logMessage();}
//    

// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?

let user_Object = {
    name: 'something something'
}

let username = user_Object.name || "guest"
console.log(username)


// both short circuits from example 13 and 14 first EVALUATE the left side ( "isLoggeIn" and "user_Object.name")
// and depending on the operator we have used ( && || ?? ) will begin to evaluate the right side