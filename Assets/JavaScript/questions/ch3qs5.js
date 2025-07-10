// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.

/* Smaller STEPS */
// 1) create an array
// 2) remove the first element + remove the last element
// 3) return the modified array

let myArray = [0, 1, 2, 3, 4, 5]

function deleteArray(arr) {
    // let myArray = [0, 1, 2, 3, 4, 5] // INDEX 0 -> VALUE 0 || INDEX 1 -> VALUE 1 || INDEX 2 -> VALUE 2 || INDEX 3 -> VALUE 3 || INDEX 4 -> VALUE 4 || INDEX 5 -> VALUE 5
    return arr.slice(1, arr.length - 1) // we use slice because we want to return a new array STARTING from the FIRST index ("1 in the slice() method") 
    // and ENDS at the PENULTIMATE index ( INDEX 4 in our case ). Slice's method last index means UP TO, BUT NOT INCLUDING!!!
}

console.log(deleteArray(myArray));