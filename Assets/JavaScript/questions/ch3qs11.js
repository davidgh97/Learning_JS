// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.

/* Smaller STEPS */
// 1) create an array of strings
// 2) go through the given array of strings
// 3) check which of the strings inside the give array have a length of less than 5 characters and add them to the new array
// 4) return the new array

let arrayOfStrings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

function filterString(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5)
        newArray.push(arr[i])
    }

    return newArray;
}

console.log(filterString(arrayOfStrings))