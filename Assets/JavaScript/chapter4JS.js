// let modalButton = document.getElementById('open-modal-btn'),
//     modal = document.getElementById('modal'),
//     closeCross = document.querySelector('.close-modal-cross'),
//     closeButton = document.querySelector('#close-modal-btn'),
//     generalClose = document.querySelector('.close');

// // modalButton.addEventListener('click', function openModal() {
// //     modal.style.display = 'block';
// // })

// // closeModal.addEventListener('click', function() {
// //     modal.style.display = 'none';
// // })

// // const closeModal = () => {
// //     modal.style.display = 'none';
// // }

// const openModal = () => {
//     modal.style.display = 'block';
// }

// // closeButton.addEventListener('click', closeModal);
// // closeCross.addEventListener('click', closeModal);
// modalButton.addEventListener('click', openModal);

// modal.addEventListener('click', event => {
//     console.log(event.target)
//     console.log(this.HTMLElement);
//     if (event.target.matches(`.${generalClose.classList[0]}`)) {
//         modal.style.display = 'none';
//     }
// });

// console.log(generalClose.classList[0]);

// document.body.onload = addElement;

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

//create and append
// let myList = document.getElementById('div1'),
//     myButton = document.getElementById('submit-btn'),
//     newListItem = document.createElement('li');

let myDiv4 = document.querySelector('#modal'),
    theButton2 = document.querySelector('#open-modal-btn'),
    theButton3 = document.querySelector('#open-modal-btn3'),
    randomDiv = document.querySelector('#content-area')
    // newDiv = document.createElement('div'); 

theButton2.addEventListener('click', (e) => {
    let newDiv = document.createElement('div'),
        currentdate = new Date();

    newDiv.appendChild(document.createTextNode(` Last Sync: ${currentdate.getDate()}/${(currentdate.getMonth() + 1)}/${currentdate.getFullYear()} @${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`))
    
    randomDiv.appendChild(newDiv)
});

var click_count = 0;

function myClick(event) {
    click_count++;
    console.log(click_count)
    console.log(event.target)
    if(click_count == 10) {
        // to remove
        console.log('the button has been clicked 10 times')
        theButton3.removeEventListener('click', myClick);
        event.target.href = "javascript:void(0)";
    }
}

// to add
theButton3.addEventListener('click', myClick);

