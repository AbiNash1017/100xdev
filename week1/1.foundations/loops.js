// ==========================================
// JavaScript Loops: Syntax and Examples
// ==========================================

// 1. FOR LOOP
// Syntax:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

console.log("--- For Loop Example ---");
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// 2. WHILE LOOP
// Syntax:
// while (condition) {
//   // code to be executed
//   // (remember to update the condition variable to avoid infinite loops)
// }

console.log("\n--- While Loop Example ---");
let count = 0;
while (count < 3) {
    console.log("Count is: " + count);
    count++;
}

// 3. DO-WHILE LOOP
// Syntax:
// do {
//   // code to be executed at least once
// } while (condition);

console.log("\n--- Do-While Loop Example ---");
let x = 5;
do {
    console.log("Value of x is: " + x);
    x++;
} while (x < 5); // Condition is false, but the block runs once.

// 4. FOR...OF LOOP (used for iterables like arrays, strings)
// Syntax:
// for (variable of iterable) {
//   // code to be executed
// }

console.log("\n--- For...Of Loop Example ---");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}

// 5. FOR...IN LOOP (used for object properties)
// Syntax:
// for (variable in object) {
//   // code to be executed
// }

console.log("\n--- For...In Loop Example ---");
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(key + ": " + person[key]);
}

// ==========================================
// Loop Control Statements
// ==========================================

// 6. BREAK STATEMENT
// Exits the loop completely.
console.log("\n--- Break Statement Example ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Breaking the loop at i = 3");
        break;
    }
    console.log("i = " + i);
}

// 7. CONTINUE STATEMENT
// Skips the current iteration and continues with the next one.
console.log("\n--- Continue Statement Example ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping iteration i = 3");
        continue;
    }
    console.log("i = " + i);
}

// ==========================================
// Array Iteration Methods (Functional Loops)
// ==========================================

// 8. FOREACH METHOD
// Syntax:
// array.forEach(function(currentValue, index, arr))

console.log("\n--- forEach Method Example ---");
const numbers = [10, 20, 30];
numbers.forEach((num, index) => {
    console.log("Index " + index + " contains: " + num);
});
