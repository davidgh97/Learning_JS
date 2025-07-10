// a JS file where I explain myself how Splice/Slice/toSpliced work  with some examples

// SPLICE
// SYNTAX: SPLICE(START, END)

// DOES mutate/alter the original array - removes / replaces / adds elements in the original array & returns altered elements



// <<<---------------------------------->>>


// SLICE
// SYNTAX: slice(START, END)

// Does not mutate/alter the original array - returns a shallow copy of a portion of the original array

// START and END parameters are optional. both are zero-based index

// EXAMPLES

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// CASE 1: only START parameter | END omitted
// A) START is > 0 ( positive ) - array.slice(3) = returns a new array [4,5,6,7,8,9]
// slice(3) extracts elements from index 3 to the end of the array

// B) START is < 0 ( negative ) - array.slice(-3) = returns a new array [7,8,9]
// slice(-3) extracts the last (3) elements from end of the array. Negative indices are counted from the back of the array -3, -2, -1
// The negative index -3 itself is included because it is the starting point of the extraction.

// CASE 2: both START and END exist
// A) START & END are both > 0 ( positive ) - array.slice(1,4) = returns a new array [2,3,4]
// START will be the indice from where we start extracting and END will be the point where we will stop ( NOT INCLUDING END INDICE )

// B) START > 0 ( positive ) and END < 0 ( negative ) - array.slice(1,-4) = returns a new array [2,3,4,5]
// START will be the indice from we start extracting again, but this time goes up to, but does not include, END (the element at index)

// TIP: The slice method always excludes the element at the final index specified, regardless of whether it is positive or negative.

// read from start --->
//    0     1     2     3     4
// |     |     |     |     |     |
// |  S  |  L  |  I  |  C  |  E  |
// |     |     |     |     |     |
//   -5    -4    -3    -2    -1
// <--- read from reverse


// <<<---------------------------------->>>


// toSpliced
// SYNTAX: toSpliced(START, END)

// Does not mutate/alter the original array - creates a shallow copy

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -3);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
