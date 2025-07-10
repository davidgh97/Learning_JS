// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.
// THE 12 th question went missing.

/* Smaller STEPS */
// 1) get the sentence
// 2) create a counter
// 3) iterate through the object for occurrences
// 4) return as object


let sentence = 'hello world my name is hello, is is , what a , grade , world, my, banana, james, cool'

function wordCounter(str) {
    let counter_dict = {} // create an empty object at the start

    let string_to_array = str.replaceAll(',', '').split(' ') // put every word in an array. Firstly we get rid of the ' , ' and 
    // then use .split to convert each word in new array elements

    for (let i = 0; i < string_to_array.length; i++) { // iterate through the elements of the array we just create in string_to_array
    
        console.log(string_to_array[i])
        console.log(` <---> `)
        if (string_to_array[i] in counter_dict) { // check if the word is already a key in the object 
            counter_dict[string_to_array[i]] = counter_dict[string_to_array[i]] + 1; // increment
        } else {
            counter_dict[string_to_array[i]] = 1 // if there is no key with the word, mark the first occurrence
        }
    }

    return counter_dict // return the new object
}

console.log(wordCounter(sentence));