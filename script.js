// console.log("Helsudhsudhsudhsu")

// variables

// Data types
// Primitive data types: numbers, strings, booleans (true or false)
// Complex: Arrays, objects, etc

// numbers: 1, 2, 3, 4.5, 100.875....
// strings: any piece of text "-------------------"

// assign variables at the beginning

let x = 1;
let y = 2;

// let z = x + y;
let message = "changinsdsudhsuhdug it!"
let txtColor = "#00fff"

// NEVER REWRITE SAME CODE TWICE

// change color of text
let messageDiv = document.getElementById("message");
messageDiv.innerHTML = message;
messageDiv.style.color = txtColor;

// change color of buttons
let btnColor = "#ff0000"
let btnColor2 = "#ffff00"
let buttons = document.getElementsByClassName("clickMe");
// console.log(buttons.length)

// get all elements by classname and do something to them
for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = btnColor;
}

// get some elements based on number of buttons by classname and do something to them
let btnCycle = 10;
for (let i = 0; i < btnCycle; i++) {
  buttons[i].style.backgroundColor = btnColor;
}
for (let i = btnCycle; i < buttons.length; i++) {
  buttons[i].style.backgroundColor = btnColor2;
}

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

let isDisplayed = false

function changeImg() {
  if (isDisplayed == true) {
    isDisplayed = false
    img1.style.display = "block";
    img2.style.display = "none";
  } else if (isDisplayed == false) {
    isDisplayed = true
    img1.style.display = "none";
    img2.style.display = "block";
  }
  console.log(isDisplayed)
}

// boolean true/false
// conditionals if/else
// function based on button click

// console.log(img1)
// console.log(img2)



