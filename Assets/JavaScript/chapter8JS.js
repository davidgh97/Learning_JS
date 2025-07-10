//chapter8JS

// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters.
// Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helLowOrldmynameisjamesandIlikeicecream',
    string_2 = 'thequickbrownfoxjumpsoverthelazydog',
    string_3 = 'abcdefghijk'

function uniqueChars(string) {
    let checkChars = {}

    for (let i = 0; i < string.length; i++) {
        if (string[i] in checkChars) {
            checkChars[string[i]] += 1
            console.log(checkChars)
            return false;
        } else {
            checkChars[string[i]] = 1
        }
    }

    return true
}

console.log(uniqueChars(string_1))
console.log(uniqueChars(string_2))
console.log(uniqueChars(string_3))


// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

let nums1 = [1, 2, 3, 4, 5],
    nums2 = [10, 11, 12, 13, 14]

function sortArrays(arr1, arr2) {
    return sortedArr = [...arr1, ...arr2].filter((a,b) => a - b)
}

console.log(sortArrays(nums1, nums2))

// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once.
// Write a function that returns an array of all the elements that appear twice in the given array.
// You must achieve this with O(n) time complexity.

let intArray = [1, 2, 3, 4, 5, 3254, 412, 234, 1, 2, 111, 7457, 1245, 666, 4, 5, 111];

function searchDuplicates(arr) {
    let duplicatesArray = [],
        // the new array in which we will push all the duplicate values
        count_duplicates = {};
        // easiest way to find out if there a duplciates is by creating key-value pairs in an empty object

    for (let curernt_element of arr) { 
        // use for .. of instead of standard for loop because we will only need values and we have no use for indexes
        if (curernt_element in count_duplicates) {
            // search if the current element is already a key in the object
            count_duplicates[curernt_element]++;
            // this also increments the number of time the element has appeared in the array
            duplicatesArray.push(curernt_element)
            // if the element is a already a key, it means it is a duplicate so we push it to our duplicatesArray
        } else {
            count_duplicates[curernt_element] = 1;
            // otherwise, if it isn't an already existing key in the object, we create it and mark it with 1 ( appeared once )
        }
    }
    
    return duplicatesArray, count_duplicates;
}

console.log(searchDuplicates(intArray))

// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative.

let originalArray = [1, 2, 3, 4, 5, 6, 10, 18, 19, 20, 21],
    k = 5;
// number of steps the array will move its elements by
    
function rotateByK(arr, k) {
    let rotatedArr = arr.slice(-k).concat(arr.slice(0,-k))
    return rotatedArr
}

console.log(rotateByK(originalArray,k))

// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']'
// , determine if the input string is valid.
// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// let s = "()[]{}",
//     s2 = "([])[]]{}{]}"


// function validParenthesis(string) {
//     let correctParenthesis = {};


// }