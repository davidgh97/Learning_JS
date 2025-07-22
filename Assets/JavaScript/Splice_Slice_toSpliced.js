// a JS file where I explain myself how Splice/Slice/toSpliced work  with some examples

// SPLICE
// SYNTAX:
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)

// DOES mutate/alter the original array - removes / replaces / adds elements in the original array & returns altered elements

// EXAMPLES

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// START < 0 -> counts back from the end of the array
// START < -array.length -> returns 0
// START >= array.length -> no element will be deleted, but the function will still add if there are elements to be added
// START is omitted - nothing is deleted

// DELETECOUNT - interger value that indicates the number of elements to remove from "START"
// DELETECOUNT - omitted || DELETECOUNT >= START -> all elements from the "START" will be deleted
// DELETECOUNT = 0 || DELETECOUNT < 0 -> no elements are removed

// item1, …, itemN - the elements to add. if you do not specify any elements, splice() will only remove elements from the array.

// Basically splice goes to "START" ( the index of "START" ) and at that position either starts to delete or add elements
// depending on the parameters, given



// <<<---------------------------------->>>


// SLICE
// SYNTAX: slice(START, END)

// Does not mutate/alter the original array - returns a shallow copy of a portion of the original array
// Used to access parts of an array without mutating the original array.

// START and END parameters are optional. both are zero-based index

// EXAMPLES

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// CASE 1: only START parameter | END omitted
// A) START is > 0 ( positive ) - array.slice(3) = returns a new array [4,5,6,7,8,9]
// slice(3) extracts elements from index 3 ( INCLUDING INDEX 3 ) to the end of the array

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

// Does not mutate/alter the original array - creates a shallow copy.
// Used to access remove/add of an array without mutating the original array.
// Basically it is the copying version of Splice(). Either removes elements and/or adds elements depending on the paramaters provided

// SYNTAX:
// toSplice(start)
// toSplice(start, skipCount)
// toSplice(start, skipCount, item1)
// toSplice(start, skipCount, item1, item2)

// SKIPCOUNT -> CAN NOT BE negative or 0. If so, no elements are removed.

// EXAMPLES:

//const months = ["Jan", "Mar", "Apr", "May"];
//                  0      1      2      3

// Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
// console.log(months); // ["Jan", "Mar", "Apr", "May"]




const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -3);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
