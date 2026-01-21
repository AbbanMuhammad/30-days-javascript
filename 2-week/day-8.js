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
