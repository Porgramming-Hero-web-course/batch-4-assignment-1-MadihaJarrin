"use strict";
function removeDuplicates(numbers) {
    return numbers.filter((num, index) => numbers.indexOf(num) == index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
