"use strict";
function getProperty(obj, prop) {
    return obj[prop];
}
// Sample Input:
const person = {
    name: "Alice",
    age: 30
};
console.log(getProperty(person, "name")); // Sample Output: Alice;
