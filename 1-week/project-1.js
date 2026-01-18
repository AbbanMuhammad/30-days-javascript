// === WEEK 1 FINAL PROJECT: TASK MANAGER ===

// 1. The State
const todos = [];

// 2. Add Task (Arrow Function)
const addTask = (taskName) => {
    todos.push(taskName);
    console.log(`✅ Task added: "${taskName}"`);
};

// 3. Show Tasks
const showTasks = () => {
    console.log("--- My Todo List ---");
    if (todos.length === 0) {
        console.log("No tasks pending.");
    } else {
        todos.forEach((task, index) => {
            console.log(`${index}: ${task}`);
        });
    }
    console.log("--------------------");
};

// 4. Remove Task (With Safety Check)
const removeTask = (index) => {
    // Safety: Check if the index actually exists!
    if (index >= 0 && index < todos.length) {
        const removedItem = todos.splice(index, 1);
        console.log(`🗑️ Task removed: "${removedItem}"`);
    } else {
        console.log("❌ Error: Invalid index number.");
    }
};

// === EXECUTION ===
console.log("Initializing System...");

showTasks();               // Expect: No tasks

addTask("Learn JavaScript");
addTask("Build a Project");
addTask("Drink Water");

showTasks();               // Expect: 3 items

removeTask(0);             // Remove "Learn JavaScript"

showTasks();               // Expect: 2 items (Build a Project, Drink Water)


/* 
const todos = [];
function addTask(taskName) {
    todos.push(taskName);
    console.log(`Task added ${taskName}`);
}

function showTasks() {
    if (todos.length === 0) {
        console.log("No tasks pending");
    } else {
        todos.forEach((task, index) => {
            console.log(`${index} : ${task}`);
        });
    }
}

function removeTask(index) {
    todos.splice(index, 1);
}

showTasks();
addTask("Learn JS");
addTask("Build a Project");
showTasks();
removeTask(0);
showTasks();
*/