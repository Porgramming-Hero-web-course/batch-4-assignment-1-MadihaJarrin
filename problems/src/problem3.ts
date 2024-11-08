function countWordOccurences(sentence: string, word: string): number {

    //covert sentense & word to lowercase 

    const lowerCaseSent = sentence.toLowerCase();
    const lowerCaseWord = word.toLocaleLowerCase();

    //split the sentence 
    const words = lowerCaseSent.split(' ');

    //count occurences 
    return words.filter(w => w === lowerCaseWord).length;

}

console.log(countWordOccurences("I love typescript", "typescript"))