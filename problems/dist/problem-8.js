"use strict";
function validateKeys(obj, keys) {
    for (let i = 0; i < keys.length; i++) {
        if (!(keys[i] in obj)) {
            return false; //if not exist keys
        }
    }
    return true; //if exist all keys
}
// Sample Input:
const persons = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(persons, ["name", "age"]));
// Sample Output: true;
