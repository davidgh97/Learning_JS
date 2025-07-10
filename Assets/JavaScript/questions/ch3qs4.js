// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.

/* Smaller STEPS */
// 1) create an array of objects
// 2) create a function that takes as parameter an array
// 3) sort the array the object 'key'

let array_of_objects = [
    { price: 4.2, age: 22 },
    { price: 8.3, age: 15 },
    { price: 2.2, age: 615 }
]

array_of_objects.sort(function (a, b) {
    return parseFloat(a.age) - parseFloat(b.age);
})


console.log(array_of_objects)
console.log(parseFloat(array_of_objects.price))
