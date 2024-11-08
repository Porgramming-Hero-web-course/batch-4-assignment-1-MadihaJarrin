"use strict";
const person = {
    name: "Alice",
    age: 30
};
function getProperty(obje, prop) {
    return obje[prop];
}
console.log(getProperty(person, "name")); // Sample Output: Alice;
