"use strict";
const myProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates); //merge original with update
}
console.log(updateProfile(myProfile, { age: 26 }));
//  Sample Output:
// {
//     name: "Alice",
//         age: 26,
//             email: "alice@example.com"
// }
