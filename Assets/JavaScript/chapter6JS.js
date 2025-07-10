// async function slowRequest() {
//     await new Promise(r => setTimeout(r, 2000)); //puts the program to sleep for 2000ms or 2s
//     console.log('Finished waiting') // prints after 2s
// }

// async function slowRequest() {
//     await new Promise(r => setTimeout(r, 4000)); //puts the program to sleep for 4000ms or 4s
//     console.log('Finished waiting a second time before the time and that time when time was off time') // prints after 4s
// }

async function sleepFunction() {
    let startTime = new Date.now()
    let promise1 = new Promise(r => setTimeout(r, 2000)); // simulates a network request that takes 2s to fulfill 
    let promise2 = new Promise(r => setTimeout(r, 4000)); // simulates a network request that takes 4s to fulfill 

    let result = await Promise.all([promise1, promise2])
    let endTime = new Date.now()

    console.log(result)
    console.log('Time taken: ', startTime - endTime) // outputs a little over 4s as opposed to the 6s it would take to await both promises in series
}

sleepFunction()
console.log('<><><><><><>')
console.log(sleepFunction())