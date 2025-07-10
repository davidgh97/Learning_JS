// Write a function that takes the array ['a', 'c', 'b', 'c', 'a', 'a'] as input and returns a dictionary of key-value pairs,
// where the key is a letter in the array and the value is the number of instances of that letter in the array.

/*
    1) create an array letters: ['a', 'c', 'b', 'c', 'a', 'a']
    2) count as many times a letter appears
    3) return an object where key = a letter and the value = number of times is shows up
*/

let letters = ['a', 'c', 'b', 'c', 'a', 'a'],
    freshObj = {};

for (let i = 0; i < letters.length; i++) {
    if (`${letters[i]}` in freshObj) {
        freshObj[`${letters[i]}`] += 1;
    } else {
        freshObj[`${letters[i]}`] = 1;
    }
}

console.log(freshObj)
console.log(JSON.stringify(freshObj))