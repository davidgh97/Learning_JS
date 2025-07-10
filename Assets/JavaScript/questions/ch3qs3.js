// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.

/* Smaller STEPS */
// 1) create an array of strings containing numbers
// 2) iterate through the array of strings
// 3) convert the array of strings of numbers into an array of number values
// 4) return the new array;

let array_of_strings = ['4', 'David', '8', 'Diana', '2', '10', 'Lilo', 'Lilo123', '5']
let new_array_of_numbers = []

// created to test
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str)); // check if a string is a numerical value or if it is not. Also parsing to float.
}

// created to test
function isWord(str) { // create a function that check using a regex if the parameter is a string or a numerical value or other type
    return /^[a-zA-Z]+$/.test(str); // create a regex to check if the 'str' is a string
}

// created to test
function checkStringType(str) {
    if (isNumber(str)) {
        return "Number"; // self explanatory
    } else if (isWord(str)) {
        return "Word"; // self explanatory
    } else {
        return "Mixed or Invalid";
    }
}

function transformersPrime(arr) {
    for (let i = 0; i < arr.length; i++) { // iterate through the array of strings and check which ones are "Number" or Word" or "Mixxed or Invalid";
        console.log(parseFloat(arr[i]))
        let numified = parseFloat(arr[i])
        if (!isNaN(numified)) {
            new_array_of_numbers.push(numified);
            console.log(`this is the new array` + new_array_of_numbers)
        } else if (checkStringType(arr[i]) === "Word" || checkStringType(arr[i]) === "Mixed or Invalid" ) {
            console.log("No bueno")
            continue;
        }
    }

    return new_array_of_numbers
}

// let bananaReplace = array_of_strings.replaceAll(',', '')

console.log(transformersPrime(array_of_strings))