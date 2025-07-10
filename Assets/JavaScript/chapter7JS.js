// chapter7JS

// let numbers = [315152, 123, 34123]
// numbers.forEach((element, elementIndex) => {
//     console.log(`the value ${element} for the index ${elementIndex}`) // outputs each index one at a time
// })

// let numbers = [1, 2, 3]
// console.log(numbers)

// numbersTwo = numbers.map((element, elementIndex) => {
//     return element * 2
// })

// console.log(numbersTwo) // outputs [2, 4, 6] as each value is multiplied by 2

let my_cool_array = [8, 3, 93, 3, 123, 2, 34, 5, 6, 6]

let reduced_array = my_cool_array.reduce((accumulator, current_value, current_index) => {
    console.log(typeof accumulator)
    console.log(`ACCUMULATOR: ${accumulator}\nCURRENT_VALUE: ${current_value}\nCURRENT_INDEX: ${current_index}`)
    return accumulator + `${current_value}:${current_index}`
}, '')

console.log(reduced_array)