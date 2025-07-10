// let s = "()[]{}",
//     s2 = "([])[]]{}{]}"

// function invalidParenthesis(string) {
//     let correctParenthesis = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
    
//     // check if string is either undefined or null
//     if (!string) {
//         return 0
//     }

//     // check that the selected element is always an open paranthesis be it "(", "[", "{"
//     let firstChar = string[0]
//     if (!(firstChar in correctParenthesis)) {
//         return 1
//     }

//     console.log(firstChar)

//     console.log(firstChar in correctParenthesis)

//     let indexEndChar = string.indexOf(correctParenthesis[firstChar])

//     console.log( indexEndChar) 

// }

// console.log(invalidParenthesis(s2))


let arryy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    bababui = arryy.slice(2,5)

console.log(bababui)