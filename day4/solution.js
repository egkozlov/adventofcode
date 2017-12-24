const fs = require('fs');

function isPhraseValid(phrase) {
    const words = phrase.split(' ');
    return words.every((word) => words.lastIndexOf(word) === words.indexOf(word));
}

function sortLettersInPhraseWords(phrase) {
    const words = phrase.split(' ');
    return words
        .map((word) => word.split('').sort().join(''))
        .join(' ');
}

const testData = fs.readFileSync('data.txt', 'utf8');
const phrases = testData.split('\n');

const correctPassPhrases = phrases.filter(isPhraseValid);
console.log('ResultA: ', correctPassPhrases.length);

const correctPhrasesWithSortedLetters = phrases
    .map(sortLettersInPhraseWords)
    .filter(isPhraseValid);
console.log('ResultB: ', correctPhrasesWithSortedLetters.length);
