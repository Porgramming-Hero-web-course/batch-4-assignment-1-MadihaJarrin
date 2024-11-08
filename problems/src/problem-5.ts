type T = {
    name: string,
    age: number
}

function getProperty<T, arguments extends keyof T>(obje: T, prop: arguments): T[arguments] {
    return obje[prop];
}


// Sample Input:
const person = {
    name: "Alice",
    age: 30
};

console.log(getProperty(person, "name")); // Sample Output: Alice;