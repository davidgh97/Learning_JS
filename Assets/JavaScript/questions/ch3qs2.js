//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.

/* Smaller STEPS */
// 1) create an array of objects called names_and_ages
// 2)  create a function that accepts an arr as parameters
// 3) search/iterate through the array and search for objects. Then access the 'age' (key) and check which of the 'names' (key) has the higher 'age' (key).
// 4) return the name with the  highest age.


const names_and_ages = [{ name: 'David', age: 27 }, { name: 'Marcelo', age: 56 }, { name: 'George', age: 33 }]

function pickTheEldest(arr) {
    let oldest = arr[0].age;
    for (let i = 0; i < names_and_ages.length; i++) {
        // console.log(arr[i])
        if (oldest < arr[i].age) {
            oldest = arr[i].age;
        } else {
            continue
        }
    }
        
    return oldest;
}

console.log(pickTheEldest(names_and_ages))