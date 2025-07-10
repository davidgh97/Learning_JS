// Approach: Now we will create our own custom function to deep clone an object.

//     We will make a function deepCopy which will take an object whose deep copy needs to be created as input and will return a deeply copied object.
//     We will declare a result object which will store the final output.
//     Check if the input object is:
//         Null or undefined or an array or a function or not of the type object(for example – string, boolean number), then we will simply return the input
//         If the input is of a type object then we will fetch the keys of the object using the Object.keys method and for each of the keys will again call the deepCopy function.
//     Return result.

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

// Declare object to be cloned
const objOne = { 
    email: "foo@bar.com", 
    'david': {
        hobbies: ["singing", "dancing", "music"]
    }
} 
  
// Function to deep copy an existing object and return new object 
function deepCopy(obj) {
  
    // Declare object which will store the output 
    let result = {}
    let object_keys = Object.keys(obj) // Object.keys(obj) will create an array including all the keys found inside the object that we pass

    for (let i = 0; i < object_keys.length; i++) { // iterate through the array returned by Object.keys(obj)
        result[object_keys[i]] = obj[object_keys[i]] // "create" inside the empty object the KEY: VALUE pair from the object we want to deep clone
    }

    return result;
}

console.log(deepCopy(objOne))

objOne.email = "feeFooFaa@bar.com"; // change values inside the original object to see if the deep cloned object is affected.

console.log(deepCopy(objOne))