// const me = {
//     name: 'james',
//     age: 27
// }

// class Person {
//     // class body
//     constructor(name, age) {
//         this.name = name // name is a property of the class
//         this.age = age
//     }

//     greet() {
//         return `Hello my name is ${this.name} and I am ${this.age} years old`
//     }
// }

// const you = new Person('rufus', 24)
// const them = new Person('doloris', 31)

// console.log(you)
// console.log(typeof you)
// console.log(you.name)
// console.log(you.age)
// console.log(you.greet())
// console.log(them.greet())

// let theBigR = document.createElement('div'),
//     theRace = document.createElement('div'),
//     theTitle = document.createElement('p')

// theBigR.setAttribute("class", "raceSection")
// theRace.setAttribute("class", "raceDiv")
// theTitle.setAttribute("class", "raceTitle")
     
// theTitle.textContent = "The big race is upon us"

// document.body.appendChild(theBigR)
// theBigR.appendChild(theRace)
// theRace.appendChild(theTitle)

class Dog {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        this.wagTail = () => {
            return (`${this.name} does the wagging tail!`)
        }
    }

    bark() {
        return (`${this.name} woofs!`)
    }
}

console.log(Dog)


class GermanShepard extends Dog {
    constructor(name, age) {
        super(name, age);
        this.isUgry = true;
    }
}
const dog1 = new Dog('Rufus', 10)
const dog2 = new GermanShepard('Lilo', 4)

console.log(dog1)
console.log(dog1.wagTail())
console.log(dog1.bark())
console.log('<------------------------>')
console.log(dog2)
console.log(dog2.isUgry)
console.log(dog2.bark())



// if (Object.getPrototypeOf(dog1) === Object.getPrototypeOf(dog2)) {
if (dog1.constructor === dog2.constructor) {
    console.log(`They are the same hahaha ${typeof dog1.bark}`)
} else {
    console.log(`You failed hahaha ${typeof dog1.bark}`)
}


// //* ITERATOR / GENERATOR FUNCTIONS
// function* test() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }

// // console.log([...test()]);

// for (const value of test()) {
//     console.log(value)
// }
// console.log(test())
// console.log(typeof test())
// console.log(test)
// console.log(typeof test)
// // console.log(test().next());
// // console.log(test().next());
// // console.log(test().next());