"use strict";
//to calculate shape Area 
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed(2)); //rounded to 2 decimal places.
    }
    else if (shape.shape === "rectangle") {
        return shape.height * shape.width;
    }
    else {
        return 0;
    }
}
// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea); // Sample Output 1: 78.54;
// Sample Input 2:
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea); // Sample Output 2: 24;
