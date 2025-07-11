let s = "()[]{}",
    s2 = "([])[]]{}{]}",
    s3 = "([([{()}{}})["
    s4 = "([{}]){[]}(){[[]]}"

function invalidParenthesis(string) {
    let correctParenthesis = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
   
    // check if string is either undefined or null
    if (!string) {
        return 0
    }

    // check that the selected element is always an open paranthesis be it "(", "[", "{"
    let firstChar = string[0]
    if (!(firstChar in correctParenthesis)) {
        return 1
    }

    // find the index of the first open paranthesis that matches our "firstChar"
    let indexEndChar = string.indexOf(correctParenthesis[firstChar])
    if (indexEndChar === -1) {
        return 1
    }

    // check if the current string can be worked on which means checking if there are more than 2 paranthesis in the string 
    if (indexEndChar === 1 && indexEndChar === string.length - 1) {
        return 0
    }

    // check if there is an end string -> find middle group
    if ( indexEndChar === string.length - 1 ) {
        let middle_string = string.slice(1, indexEndChar)
        return invalidParenthesis(middle_string)
    }

    // check if there is no middle string -> find end string
    if (indexEndChar === 1) {
        let end_string = string.slice(indexEndChar + 1, string.length)
        return invalidParenthesis(end_string)
    }

    let middle_string = string.slice(1, indexEndChar)
    let end_string = string.slice(indexEndChar + 1, string.length)

    return invalidParenthesis(middle_string) + invalidParenthesis(end_string)
}

console.log(invalidParenthesis(s))  // good example
console.log(invalidParenthesis(s2))  // bad example due to '[]]{}{]}'
console.log(invalidParenthesis(s3))  // 
console.log(invalidParenthesis(s4))  // 
// console.log(invalidParenthesis("{([])}[]()[[())]]"))  // bad example due to '[[]]'
 
    
// Some sort of attempt. Maybe will try doing this way too.
    
    
//     for (let i of string) {
//         if (comparison.length === 0 ) {
//             comparison.push(i)
//             console.log("checking " + comparison[i])
//         } else if (i in correctParenthesis) {
//             comparison.push(i)
//             console.log("checking " + comparison[i])
//         } else {
//             if (Object.values(correctParenthesis).includes(i) && comparison.length > 0) {
//                 // console.log("This is the type of paranthesis at the i index: " + i)
                
//                 let lastParenthesis = comparison.pop();
//                 if (correctParenthesis[lastParenthesis] !== i) {
//                     return {
//                         message: "String is invalid",
//                         isValid: false
//                       };
//                 }
//                 // console.log("This is the last open paranthesis: " + lastOpen)            
//             }
//         }
//         console.log(comparison)
//         // console.log(correctParenthesis)
//     }

//     if (comparison.length > 0) {
//         return {
//             message: "String is valid",
//             isValid: true
//           };
//     } else {
//         return false
//     }
// }

// validParenthesis(s)
// console.log(`<-------->`)
// // validParenthesis(s2)