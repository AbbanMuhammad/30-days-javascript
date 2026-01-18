//Challenge 1:
let isDarckMode = true;
const backgroundColor = isDarckMode ? "black" : "white";
console.log(backgroundColor);

//Challenge 2:
let itemsPurchased = 6;
const bulkDiscount = itemsPurchased > 5 ? 0 : 10;
console.log(`Shipping is $${bulkDiscount}`);

//Challenge 3:
let userRole = "admin";

switch (userRole) {
    case "admin":
        console.log("Full Access");
        break;
    case "manager":
        console.log("Dashboard Access");
        break;
    case "employee":
        console.log("Time Clock Access");
        break;
    case "customer":
        console.log("View Products Only");
        break;
    default:
        console.log("Unknown Role");
}

//Challenge 4:
let fruit = "maize";
switch (fruit) {
    case "apple":
    case "banana":
    case "orange":
        console.log("This is fruit");
        break;
    case "carrot":
    case "onion":
        console.log("This is Vegetables");
        break;
    default:
        console.log("Unknown Foods");
}

//Challenge 5:

/*
let status;
const batteryLevel = 15;

if (batteryLevel > 20) {
    status = "Healthy";
} else {
    status = "Low Battery";
}
console.log(status);
*/

const batteryLevel = 15;
const status = batteryLevel > 20 ? "Healthy" : "Low battery";
console.log(status);
