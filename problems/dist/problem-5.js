"use strict";
function getProperty(obje, prop) {
    return obje[prop];
}
// Sample Input:
const person = {
    name: "Alice",
    age: 30
};
console.log(getProperty(person, "name")); // Sample Output: Alice;
