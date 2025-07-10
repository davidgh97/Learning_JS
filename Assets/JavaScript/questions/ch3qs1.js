// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

/* Smaller STEPS */
// 1) create an array of integers
// 2) itterate through the array and check for even numbers
// 3) filter the even numbers in a new array

const integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filterArray(arr) {
    let filteredArray = [];

    for (let i = 0; i < integerArray.length; i++) {
        if (arr[i] % 2 === 0) {
            filteredArray.push(arr[i]);
        } else {
            continue
        }
    }

    return filteredArray;
}

console.log(filterArray(integerArray));