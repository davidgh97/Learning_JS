// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.

/* Smaller STEPS */
// 1) create a function (father function)
// 2) return an anonymous function
// 3) inside the anonymous function increment the number of invocations and then console log them
// 4) finally asign the (father function) to a variable ( this will asign a function definition to our variable thus making it able to "call" it as if it were a function )

function rememberFunction() {
    let number_of_invocations = 0;
    return function () {
        number_of_invocations++
        console.log(number_of_invocations)
    }
}

const incrementer = rememberFunction()

incrementer()
incrementer()
incrementer()
incrementer()