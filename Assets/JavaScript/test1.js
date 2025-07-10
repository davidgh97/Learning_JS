let s = "()[]{}",
    s2 = "([])[]]{}{]}"

function invalidParenthesis(string) {
    /*
    Check if a string full of parathesis is invalid.
    Rules:
      1. an open parathesis must close with the first close one encountered
      2. if a parathesis cannot be closed, then it's invalid
    Tip: strings can be partitioned into smaller chunks. The first and last characters 
    are opened, respectively close paranthesis. Going inward, all parathesis should close
    for all chunks.
    */
    let correctParenthesis = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    // Nothing to work on
    if (!string) {
        return 0
    }

    console.log("Working on string: " + string)

    let firstChar = string[0]
    // console.log(Object.values(correctParenthesis))
    if (!(firstChar in correctParenthesis)) {
        console.log("Couldn't find open paranthesis for: " + firstChar)
        return 1;
    }

    
    let indexEndChar = string.indexOf(correctParenthesis[firstChar])
    console.log("Found closed paranthesis at " + indexEndChar)
    if (indexEndChar === -1) {
        console.log("Couldn't find closed paranthesis for: " + firstChar)
        return 1;
    }

    if (indexEndChar === 1 && indexEndChar === string.length - 1) {
        console.log("No more string to work on")
        return 0;
    }

    // no string ending
    if (indexEndChar === string.length - 1) {
        let middle_string = string.slice(1, indexEndChar)
        console.log("No Ending. Middle string: " + middle_string)
        return invalidParenthesis(middle_string) + 0
    }

    // no middle string
    if (indexEndChar === 1) {
        let end_string = string.slice(indexEndChar + 1, string.length)
        // console.log("index:" + indexEndChar)
        console.log("No Middle. End string: " + end_string)
        return 0 + invalidParenthesis(end_string)
    }

    // both middle and end string exist
    let middle_string = string.slice(1, indexEndChar)
    let end_string = string.slice(indexEndChar + 1, string.length)

    console.log("Middle: " + middle_string + " Ending: " + end_string)
    return invalidParenthesis(middle_string) + invalidParenthesis(end_string)
}
    

console.log(invalidParenthesis(s))  // good example
console.log(invalidParenthesis(s2))  // bad example due to '[]]{}{]}'
console.log(invalidParenthesis("{([])}[]()[[]]"))  // bad example due to '[[]]'
    
    
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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