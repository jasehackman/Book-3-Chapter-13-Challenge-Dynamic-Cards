// let counter = 0;

// // Builds the dom element
// const inputVal = document.querySelector("input");
// let cardBuilder = () => {
//   counter++;
//   let card = "";
//   console.log(inputVal.value);
//   card = `<div id="card--${counter}">
//     <p>${inputVal.value}</p>
//     <button id="delete--${counter}">Delete</button>
//   </div>`
//   return card;
// }

// let deleteFunction = () => {
//   let deleteBut = document.querySelectorAll("button > div");
//   console.log(deleteBut);

// }

// // appends card to dom
// let cardAppender = () => {
//   const daBody = document.querySelector("body");
//   daBody.innerHTML += cardBuilder();
//   // deleteFunction();
// }

// let calling = () => {
//   console.log("click");
//   cardAppender();
// }


// //create button listener
// const createButton = document.getElementById("create");
// createButton.addEventListener("click", calling)

let counter = 0

// creates div to put in the dom
let createDiv = (textInput) => {
  counter++
  return `<div class="card" id='div-${counter}'>
    <p>${textInput}</p>
    <button id='button-${counter}'>Delete</button>
  </div>`
}

// adds div to the dom
let postDiv = (val) => {
  document.querySelector("section").innerHTML += createDiv(val)
}


// removes element when putton is clicked
document.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Delete"){
    let idval = e.target.parentElement;
    document.querySelector("section").removeChild(idval);
  }
} )


let inputfield = document.querySelector("input");
// click event on create button
let createButton = document.getElementById("create");
createButton.addEventListener("click", () => {
  postDiv(inputfield.value);
})