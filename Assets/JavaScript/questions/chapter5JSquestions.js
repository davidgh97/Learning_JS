// 1. Write a JavaScript class named Rectangle that has two properties, width and height, initialized through its constructor.
// Then, instantiate an object of Rectangle with a width of 5 and a height of 10.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height
    }

    calc() {
        return this.width * this.height;
    }
}

const theRectangle = new Rectangle(5, 10);
console.log(theRectangle.calc())

// 2. How do you create a constructor within a class named Circle that initializes a property radius and sets its value based on the argument passed when a new Circle instance is created?
// Create an instance of Circle with a radius of 4.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calcArea() {
        return Math.PI * this.radius ** 2
    }
}

const myCircle = new Circle(4);
console.log(myCircle.calcArea())

// 3. Explain how you would add a method named calculateArea to the Rectangle class that calculates the area of the rectangle.
// How does this method get added to the prototype of the class, and how can all instances of Rectangle access it?

//  !!! Already answered in the 2 questions by adding to both classes some methods that do some calculations and I instantiated them to show how to access them. !!!

// 4. In the context of a class method in JavaScript, what does the this keyword refer to, and how would you use it inside a method named describe
// in a class Person to access the instance's properties named name and age?

// Inside a class, the keyword this refers to the instance of the class itself when we call it ( the method ).
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    
    getToKnow() {
        return `I am ${this.name} and I am ${this.age} years old.`
    }
}

const newPerson = new Person('james', 27)
console.log(newPerson.getToKnow())
const secPerson = new Person('daivd', 26)
console.log(secPerson.getToKnow())


// 5. Create a class named Animal with a constructor that initializes a property species.
// Then, define a subclass named Dog that inherits from Animal and adds an additional property name in its constructor.
// How do instances of Dog access methods defined on Animal's prototype?

class Animal {
    constructor(species) {
        this.species = species;
    }
}

class Dog extends Animal {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
}

const Lilo = new Dog('Lilo', 'germanShepard')
console.log(Lilo)
