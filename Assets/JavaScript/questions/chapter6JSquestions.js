// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function helloWorld() {
    console.log("I fired immediately, right before the await!")
    await sleep(2000)
    console.log("I fired immediately after 2 seconds")
    await sleep(4000)
    console.log("I fired immediately after 4 seconds")
}

helloWorld()

// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', which will likely lead to a 404 error.
// Use try/catch to handle the error and log "Error fetching data" if the request fails.

async function fetchData() {
    try {   
        const theURL = 'https://api.example.com/nonexistent';
        const result = await fetch(theURL);
        console.log(result)

        // or we can do it in one line
        // const result = await fetch('https://api.example.com/nonexistent');
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`)
    }
}

fetchData()

// 3. Write an async function named fetchUserData that makes a GET request to 'https://the-one-api.dev/v2/' using async/await.
// Log the response to the console, handling any errors that might occur.

async function fetchUserData() {
    try {
        const result = await fetch('https://the-one-api.dev/v2/book');
        console.log(result)
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error(error.message)
    }
}

fetchUserData()

// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } using async/await.
// Ensure you set the appropriate headers and catch any errors.


// oooooke lets goo

async function postTest() {
    try {
        const result = await fetch('https://the-one-api.dev/v2/book');
        console.log(result)
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error(error.message)
    }
}

postTest()