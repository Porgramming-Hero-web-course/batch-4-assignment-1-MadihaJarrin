"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
// Sample Output 1:  6 (assuming current year is 2024)
