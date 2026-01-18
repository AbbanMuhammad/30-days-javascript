//1️⃣Variable is used to store data. In the olden day we used:
var userName = "Muhammad";

const birthday = 1989; //cannot be changed
let age = 56; //can be changed

age = 50;

//2️⃣DATA TYPES:

const city = "New York"; // strings
const temp = 98.4; // Number
const isLoggedIn = true; // boolean
let score; // undefined
let winter = null; // Null

//📌 we can use typeof function to check the data type:

console.log(typeof city);
console.log(typeof temp);
console.log(typeof isLoggedIn);
console.log(typeof score);
console.log(typeof winter);

//3️⃣ Naming Convention:
// camelcase:
let firstName;
let userLoggedOut;
//variable should make meaning:
const daysInYear = 365;

// 4️⃣ Day 1 Practice Challenge

// Task 1:
const myName = "Sani"; // Declare variable using const with my name.
let currentAge = 36; // Declare variable using let with my current age.
let isStudent = true; // Declare variable using let with boolean isStudent

//Task 2:
currentAge = 56;
// myName = 'Ibragim'; // this will throw error as myName is declared with constant.

//Task 3:
console.log(`My name is ${myName} age ${currentAge}`);
console.log(typeof isStudent);
