// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.

/* Smaller STEPS */
// 1) create an object that contains the grades of a student in various subjects
// 2) create a function that accepts an object
// 3) iterate through the object keys ( each subject )
// 4) take the grade from each subject
// 5) return the average of all the grades

let student = {
    math: {
        grade: 9
    },
    physics: {
        grade: 8
    },
    chemistry: {
        grade: 6
    },
    computerScience: {
        grade: 8
    }
}

// declare an object that contains other objects for each subject

function averageGrade(obj) {
    let sum = 0, // variable for the sum of all grades
        theAverage, // variable for the average of all the grades
        numberOfSubjects, //
        listOfSubjects = Object.keys(obj); // variable which will become an array of all the keys in the object we are working with 
    
    numberOfSubjects = listOfSubjects.length // given the array we created inside listOfSubjects, the number of keys in the object will give the number of subjects
    
    for (let i = 0; i < listOfSubjects.length; i++) { // iterate through the array 
        sum += obj[listOfSubjects[i]].grade // and add to sum each grade we find
    }

    theAverage = parseFloat(sum / numberOfSubjects); // calculate the average and use parseFloat to have a nice, decimal number

    return theAverage;
}

console.log(averageGrade(student))
