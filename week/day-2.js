//1️⃣ Operators, Strings,and Equality Trap
// we use +,-,*,/ for arithmetic operation

// Modulus (%): Return the remainder of a division.

const isEven = 10 % 2 === 0; //true
const isOdd = 10 % 2 !== 0; // false

// increment (++): adds 1
let i = 0;
i++; // i = 2 now.

//decrement (--): subtract 1
let j = 2;
j--; // j = 1 now.

//2️⃣ Strings Methods
// string is a primitive but has built in superpowers (methods)

//Industry standards: Don't write manual loop to count characters or search text, use built-in methods.

const text = "Javascript is clean";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.includes("script"));
console.log(text.slice(0, 10));

//3️⃣ The Equality Trap:
//In JavaScript there's two ways to check for equality:

//strict Equality (===): check values AND type.
//Loose Equality (==): check value but ignore type.

const num = 5;
const str = "5";

console.log(num == str); // true
console.log(num === str); // false

//📌  Day 2 Practice Challenge:

//Task 1:
let price = 100;
const taxRate = 0.2;
price = 110;
const total = `The total is ${price + price * taxRate}`;
let isExpensive = total === "132";

//Task 2:
const sentence = "I am learning JavaScript from scratch";
console.log(sentence.length);
const cleanSentence = sentence.replace("scratch", "Professional");
console.log(cleanSentence.toUpperCase());

//Task 3:
let even = 15 % 2 === 0;
let odd = 15 % 2 !== 0;

console.log(even);
console.log(odd);