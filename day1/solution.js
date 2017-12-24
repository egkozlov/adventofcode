
const fs = require('fs');

function calcSum(textNumber, stepSize) {
    return textNumber
        .split('')
        .map((textDigit) => parseInt(textDigit))
        .reduce((accumulator, currectValue, currentIndex, array) => {
            const nextIndex = (currentIndex + stepSize) % array.length; 
            const nextValue = array[nextIndex];
            return currectValue === nextValue ? accumulator + currectValue : accumulator;
        }, 0);
}

const testNumber = fs.readFileSync('data.txt', 'utf8');
const stepSizeA = 1;
const stepSizeB = testNumber.length / 2;
console.log('resultA:', calcSum(testNumber, stepSizeA));
console.log('resultB:', calcSum(testNumber, stepSizeB));