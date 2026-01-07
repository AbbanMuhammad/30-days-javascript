// Control Flow

//1️⃣ Truthy and Falsy
/* most things are truthy. We only need to understand:
1. false
2. 0 (number zero) 
3. " " Empty string 
4. null 
5. undefined 
6. NaN (Not a Number )
*/

//2️⃣ Professional if/else (Ternary operation). Use ternary operation for a simple value assignment.

//The Newbie Way:
let access;
const age = 20;

if (age >= 18) {
    access = "Allowed";
} else {
    access = "Denied";
}

//The professional Way:
const age1 = 20;
//The structure: condition ? value_if_true : value_if_false
const accesses = age1 >= 18 ? "Allowed" : "Denied";

//3️⃣ Switch statement: Used when checking one variable against many specific values.

const role = "admin";

switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "editor":
        console.log("Edit Access");
        break;
    default:
        console.log("No Access");
}

//Day 3 Practice Challenge:

//Task 1:
const myAge = 56;
const canEnter = myAge >= 18 ? "Yes" : "No";
console.log(canEnter);

//Task 2:
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

//Task 3:
const light = ["green", "yellow", "red"];

switch (light) {
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "red":
        console.log("Stop");
        break;
    default:
        console.log("Traffic Light Broken");
}

//Task 3:
const username = "";
if (username){
  console.log("Logged in");// this is a falsy value. this will be skipped.
}else{
  console.log("Please log in"); // since the first statement is false, then this second will print out.
}