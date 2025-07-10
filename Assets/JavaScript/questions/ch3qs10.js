// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.

/* Smaller STEPS */
// 1) create and array of objects.
// 2) create a function that accepts an array
// 3) based on a specific property, in a descending order, sort the array
// 4) return the sorted array

let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 },
    { subject: 'computerScience', grade: 9 }
]
// create an array of objects. each object will have at least ( for fun ) 2 key: value pairs

function sortGrades(arr) {
    let arraySorted = grades_array.sort(function (a, b) { //using the .sort method, we will sort the array 
        return b.grade - a.grade; // using .sort, we will mutate (alter/change/modify) the original array in a descending way based on the grades of a student
    })

    return arraySorted;
}

console.log(sortGrades(grades_array))
console.log(grades_array) // checking if the original array of objects was mutated.

// must do comments