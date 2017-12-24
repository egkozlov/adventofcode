const fs = require('fs');

function isPhraseValid(phrase) {
    const words = phrase.split(' ');
    return words.every((word) => words.lastIndexOf(word) === words.indexOf(word));
}

const testData = fs.readFileSync('data.txt', 'utf8');
const phrases = testData.split('\n');
const correctPassPhrases = phrases.filter(isPhraseValid);
console.log('answer', correctPassPhrases.length);
