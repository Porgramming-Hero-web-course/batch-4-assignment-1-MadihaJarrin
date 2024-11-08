"use strict";
function countWordOccurences(sentence, word) {
    //covert sentense & word to lowercase 
    const lowerCaseSent = sentence.toLowerCase();
    const lowerCaseWord = word.toLocaleLowerCase();
    //split the sentence 
    const words = lowerCaseSent.split(' ');
    //count occurences 
    return words.filter(w => w === lowerCaseWord).length;
}
console.log(countWordOccurences("TypeScript is great, I love TypeScript", "typescript")); //output 2
