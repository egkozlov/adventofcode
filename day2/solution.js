const fs = require('fs');

function calcCheckSum(text, func) {
    const matrix = convertStringToMatrix(text);
    return matrix
        .reduce((accumulator, currectValue) => accumulator += func(currectValue), 0);
}

function convertStringToMatrix(text) {
    return text
        .split('\n')
        .map((array) => array
            .split('\t')
            .map((textDigit) => parseInt(textDigit)))
}

function getMaxMixDistinction(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return max - min;
}

function getEvenlyDivisionResult(array) {
    let result = 0;
    array.forEach((value1) => {
        array.forEach((value2) => {
            if (value1 !== value2 && value1 % value2 === 0) {
                result = value1 / value2;
            }
        });
    });
    return result;
}

const testMatrix = fs.readFileSync('data.txt', 'utf8');
const resultA = calcCheckSum(testMatrix, getMaxMixDistinction);
const resultB = calcCheckSum(testMatrix, getEvenlyDivisionResult);
console.log('resultA:', resultA);
console.log('resultB:', resultB);