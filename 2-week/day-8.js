//Task 1:
const heading = document.querySelector("#main-title");
heading.innerText = "Day 8: DOM Mastery";

//Task 2:
const paragraph = document.querySelector(".description");
paragraph.innerText = "I am being controlled by JavaScript.";
paragraph.style.color = "red";

//Task 3:
const allItems = document.querySelectorAll(".item");
allItems.forEach(item => (item.innerText = "Updated item"));

//Task 4:
console.log(heading);

// 1. Select the element
const btn = document.querySelector("#btn");

// 2. Add the Listener
// Syntax: element.addEventListener("event_type", function_to_run);

btn.addEventListener("click", () => {
    console.log("Button was clicked!");
    alert("You clicked me!");
});

btn.addEventListener("click", e => {
    // 'e' stands for 'event object'. It contains details about the click.
    // e.target refers to the specific element that was clicked.
    e.target.innerText = "Clicked!";
    e.target.style.backgroundColor = "green";
});

//Task 1:
const myInput = document.querySelector("#myInput");
const logBtn = document.querySelector("#logBtn");
logBtn.addEventListener("click", () => {
    console.log(myInput.value);
});

//Task 2:

const myBody = document.body;
const toggleBtn = document.querySelector("#toggleBtn");
let isDackMode = false;
toggleBtn.addEventListener("click", e => {
    if ((isDackMode = !isDackMode || isDackMode === "")) {
        myBody.style.backgroundColor = "black";
        myBody.style.color = "white";
    } else {
        myBody.style.backgroundColor = "white";
        myBody.style.color = "black";
    }
});

//Task 3:
const box = document.querySelector("#box");
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "blue";
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "red";
});
