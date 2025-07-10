// 1. Basic DOM Manipulation: How do you select an element with the ID main-title and change its text content to "Welcome to the DOM World"?
let mainTitle = document.getElementById('main-title');

mainTitle.innerText = "welcome to the DOM world"

// 2. Event Handling: Write the JavaScript code to listen for a click event on a button with the ID submit-btn and alert "Button Clicked!".
let myButton = document.getElementById("submit-btn");

myButton.addEventListener("click", () => {
    alert("Button Clicked!")
})

//      other way
//  function buttonClicked() {
//      alert("Button Clicked!")
//  }
//  myButton.addEventListener("click", buttonClicked)

// 3. Dynamic Styling: How can you change the background color of a <div> with the class highlight to yellow when a user hovers over it using JavaScript?
let myDiv = document.querySelector('.highlight')

myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundColor = 'yellow'
})

// 4. Element Creation and Insertion: Describe how to create a new <li> element, set its text content to "New Item", and append it to an existing <ul> with the ID list-container.
let myList = document.getElementById('div1'),
    myButtonTwo = document.getElementById('open-modal-btn'),
    newListItem = document.createElement('li'); 

myButtonTwo.addEventListener('click', (e) => {
  newListItem = document.createElement('li')
  newListItem.appendChild(document.createTextNode(`Wow, wow what a gread way to roll ${e.target}`));
  myList.appendChild(newListItem)
});

// 5. Form Handling: Write a script to prevent the default submission of a form with the ID form-example and instead console log the value of a text input field within the form when the submit button is clicked.
let myForm = document.getElementById('form-example'),
    myInput = document.getElementById('input-field');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(myInput.value)
})

// 6. Understanding Event Bubbling: Provide an example of stopping event bubbling when clicking on a <button> contained within a <div> that both have click event listeners attached.
let myDiv2 = document.querySelector('div'),
    myButtonThree = document.querySelector('button');

myButtonThree.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Button clicked')     
});

// 7. Dynamic Page Styling: How can you toggle a class active on an element when it is clicked, ensuring that if the class is present it gets removed, and if it's not, it gets added
let myDiv3 = document.querySelector('#modal'),
    theButton = document.querySelector('#open-modal-btn');

theButton.addEventListener('click', e => {
    console.log(myDiv3)
    console.log(myDiv3.classList)
    myDiv3.classList.toggle('active')
});


// 8. Advanced Event Handling: Write JavaScript code to change the text content of a paragraph element to display the current time when a button is clicked.
let myDiv4 = document.querySelector('#modal'),
    theButton2 = document.querySelector('#open-modal-btn'),
    randomDiv = document.querySelector('#content-area')
    newDiv = document.createElement('div'); 

theButton2.addEventListener('click', (e) => {
    // let newDiv = document.createElement('div'),
        let currentdate = new Date();
    
    newDiv.appendChild(document.createTextNode("Last Sync: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds()
    ))
    
    randomDiv.appendChild(newDiv)
});

// 9. Event Listener Removal: How do you remove an event listener from an element, and why might you need to do this?
let imaginaryButton = document.getElementById('imaginary-button');
let click = 0;

let handleClick = function(event) {
    click++;
    if (click == 50) {
        imaginaryButton.removeEventListener('click', handleClick);
    }
}

imaginaryButton.addEventListener('click', handleClick);


// 10. Manipulating Attributes and Properties: Write JavaScript code to change the src attribute of an <img> element and explain the difference between attributes and properties in the context of DOM elements.
let randomImg = document.querySelector('.the-img')

randomImg.setAttribute('src', 'https://www.w3schools.com/js/pic_bulbon.gif');
/*
//Source:

Attributes are defined in the HTML and reflect the initial state of the element.
Properties are part of the DOM object and reflect the current state of the element.
Synchronization:

When an element is created, attributes initialize the corresponding properties.
Changing an attribute does not always change the corresponding property and vice versa.
Usage:

Attributes are used to set initial values and configurations.
Properties are used to get and set the current state of the element.
*/
// In summary, attributes are used to define initial settings in HTML, while properties represent the current state of DOM elements and are used in JavaScript to interact with those elements.
// The difference between attributes and properties is that attributes are defined in the HTML, while properties are defined in the DOM. Attributes are the initial values of properties, but properties can change while attributes cannot. Properties are always in sync with the DOM, while attributes are not.

// 11. Utilizing Dataset Attributes: Explain how to use data-* attributes within an HTML element to store extra information and how to access this information using JavaScript.
const article = document.querySelector("#electric-cars");
// The following would also work:
// const article = document.getElementById("electric-cars")

console.log(article.dataset.columns); // "3"
console.log(article.dataset.indexNumber); // "12314"
console.log(article.dataset.parent); // "cars"

console.log(article.getAttribute('data-columns'))
