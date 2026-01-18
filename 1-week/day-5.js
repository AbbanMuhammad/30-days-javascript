//1️⃣Function Declaration (The Classic): Hoisted (can be called before defined). Good for utility functions at the bottom of a file.

console.log(sayHello());
function sayHello(name) {
    return `Hello, ${name}`;
}

//2️⃣Function Expression: Assigning a function to a variable. Not hoisted.

const sayHelloo = function (name) {
    return `Hello, ${name}`;
};
console.log(sayHelloo());

//3️⃣Arrow Functions (The Modern Standard - ES6): Shorter syntax. Used heavily in React, Node.js, and Array methods.

// If you have one parameter, parentheses are optional.
// If you have one line of logic, 'return' and {} are optional (Implicit Return).
const sayHello2 = name => `Hello, ${name}`;
console.log(sayHello2("Muhammad"));

// Complex Arrow Function
const addMath = (a, b) => {
    const sum = a + b;
    return sum; // Must use 'return' if you use curly braces {}
};

const addMaths = (a, b) => a + b;
console.log(addMaths(10, 20));

//⚠️ The "Return" Rule: Beginners often use console.log inside functions. Professionals use return. console.log: Just shows a picture of the data. You can't use it later. return: Gives the value back so the computer can use it in math or logic.

// BAD
function add(a, b) {
    console.log(a + b);
}
const result = add(2, 2); // result is undefined
console.log(result);

// GOOD
function adds(a, b) {
    return a + b;
}
const results = adds(6, 2); // result is 4
console.log(results);

//Challenge Day 5:

//Task 1:
function calculateAge(birthYear) {
    return 2026 - birthYear;
}
console.log(calculateAge(1989));

//Task 2:

const welcomeUser = (name, role) =>
    role === "admin" ? `Welcome Admin ${name}` : `Welcome User ${name}`;
console.log(welcomeUser("Sani", "Headteacher"));

//Task 3:

const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;
console.log(celsiusToFahrenheit(35));

//Task 4: The problem with code is lack of return word since we use curly braces. The correct code should be:

const multiply = (a,b) => {
  return a * b;
}
const output = multiply(5,2)
console.log(output);

