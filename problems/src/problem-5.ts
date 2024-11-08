type Person = {
    name: string,
    age: number
}
const person: Person = {
    name: "Alice",
    age: 30
};


function getProperty<T, arguments extends keyof T>(obje: T, prop: arguments): T[arguments] {
    return obje[prop];
}

console.log(getProperty(person, "name")); // Sample Output: Alice;