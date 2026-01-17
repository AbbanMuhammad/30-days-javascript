//1️⃣ The Standard for Loop
/*This is the grandfather of loops. You need 3 things:
1. Initializer: Start here (let i = 0).
2. Condition: Keep going while this is true (i < 5).
3. Iterator: What to do after each round (i++).
*/

for (let i = 0; i < 5; i++) {
    console.log(`The number ${i}`);
}

//2️⃣The while Loop:
/*
Use this when you don't know how many times the loop needs to run (e.g., "Keep rolling the dice until I get a 6").
Warning: If you forget to update the condition, you will crash your browser (Infinite Loop).
*/

let i = 0;
while (i < 5) {
    console.log(i);
    i++; // Don't forget this!
}

//3️⃣Controlling the Loop (break and continue)
/*
1. break: "Stop the loop completely right now."
2. continue: "Skip the rest of this round and jump to the next one."
*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Skip 3
    if (i === 5) break; // Stop at 5 (don't print 5)
    console.log(i);
}
// Output: 1, 2, 4

//4️⃣ Challenge for Day 4:

//Task 1:
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Task 2:
for (let odd = 1; odd <= 10; odd++) {
    if (odd % 2 === 0) continue;
    console.log(`${odd} is an Odd Number`);
}

//Task 3:
let energy = 10;
while (energy > 0) {
    console.log(energy);
    energy--;
}
console.log("Blast Off!");

//Task 4:
let stars = "";
for (let i = 1; i <= 5; i++) {
    stars = stars + "*";
    console.log(stars);
}

//the answer is B Atriangle (1 star, then 2 stars, then 3...).
