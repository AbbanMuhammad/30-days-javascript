// Arrays (The Data Container):
//1️⃣ Creating and Accessing:Arrays are zero-indexed. The first item is always at 0.

// A list of strings
const cars = ["Toyota", "Honda", "BMW"];

console.log(cars[0]); // "Toyota"
console.log(cars.length); // 3
console.log(cars[cars.length - 1]); // Gets the last item ("BMW")

// 2️⃣Mutating Methods (Changing the Array): These change the original list.✅ push(item): Adds to the end. (Used constantly).✅ pop(): Removes from the end.✅ unshift(item): Adds to the start.✅ shift(): Removes from the start.

const numbers = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.pop(); // [1, 2, 3]
numbers.push(10);
numbers.unshift(0);
numbers.push(100);
console.log(numbers);

//3️⃣ Modern Looping (forEach): Standard: Don't use a standard for loop (i = 0; i < len...) to read an array. Use .forEach(). It's cleaner and reads like English.

const fruits = ["Apple", "Banana", "Mango"];

// "For each fruit in the fruits list, log the fruit."
fruits.forEach(fruit => {
    console.log(`I love ${fruit}`);
});

//⚠️ The Professional Concept: "Immutability" In professional code (Redux, React), we try not to change (mutate) the original array if we can help it. Instead of pop or splice, we often prefer slice or spread operators (we will learn these in Week 2), but for now, master the basic methods above.

//Challenges for day 6:
//Task 1:
const students = ["Sani", "Ibrahim", "Musa"];
console.log(students[1]);
students.push("Fatima");
students.unshift("Ali");
console.log(students);

//Task 2:
const tasks = ["wake up", "Code", "Eat", "Sleep"];
tasks.pop();
tasks.shift();

console.log(tasks);

//Task 3:

tasks.forEach(task => {
    console.log(`Pending task: ${task}`);
});

//Task 4:
const data = [10, 20, 30];
data[1] = 50;
console.log(data); //The correct answer is [10,50,30].
