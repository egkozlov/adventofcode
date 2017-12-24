const fs = require('fs');

function calculateStepsToReachLimit(initialArray, updateFunc){
    const offsetArray = [...initialArray];
    const offsetLength = offsetArray.length;
    let stepsCount = 0;
    let currentIndex = 0;
    
    while (offsetLength > currentIndex || currentIndex < 0) {
        const previousIndex = currentIndex;
        currentIndex += offsetArray[previousIndex];
        updateFunc(offsetArray, previousIndex);
        stepsCount += 1;
    }

    return stepsCount;
}

function updateFuncIncreaseOnly(array, previousIndex) {
    array[previousIndex] += 1;
}

function updateFuncIncreaseAndDecrease(array, previousIndex) {
    if (array[previousIndex] > 2) {
        array[previousIndex] -= 1
    } else {
        array[previousIndex] += 1;
    }
}

const testData = fs.readFileSync('data.txt', 'utf8');
const initialArray = testData
    .split('\n')
    .map((stringNumber) => parseInt(stringNumber));


const stepsCountA = calculateStepsToReachLimit(initialArray, updateFuncIncreaseOnly);
const stepsCountB = calculateStepsToReachLimit(initialArray, updateFuncIncreaseAndDecrease);
console.log('ResultA: ', stepsCountA);
console.log('ResultB: ', stepsCountB);