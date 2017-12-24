/*The idea of solution is the next:
it will be easier to think about this structure as coordinate system
where 1 - is a point with coordinates (0,0)
and when we are moving we change this coordinate
so for 2 it will be (1,0), for 3 - (1,1) etc.
(-1,-1)  ( 0,-1)  ( 1, 1)
(-1, 0)  ( 0, 0)  ( 1, 0)
(-1,-1)  ( 0,-1)  ( 1,-1)

And distance to point (0,0) it's actually sum of abs x and y coordinates 

To solve the problem we need to imitate movement on this graph and find in
which coordinate step with index 265149 will happen.
*/

function calcDistance(testNumber) {
    let xPos = 0,
        xNeg = 0,
        yPos = 0,
        yNeg = 0,
        xCurr = 0,
        yCurr = 0;

    while (testNumber !== 1) {
        const xNegAbs = Math.abs(xNeg);
        const yNegAbs = Math.abs(yNeg);
        if ((xPos === yPos) && (xNegAbs === yNegAbs) && (xPos === xNegAbs)) {
            xCurr += 1;
            if (xCurr > xPos) {
                xPos += 1;
            }
        } else if (xPos > yPos) {
            yCurr += 1;
            if (yCurr > yPos) {
                yPos += 1;
            }
        } else if ((xPos === yPos) && (xNegAbs === yNegAbs) && (xPos !== xNegAbs)) {
            xCurr -= 1;
            if (xCurr < xNeg) {
                xNeg -= 1;
            }
        } else if ((xPos === yPos) && (xNegAbs !== yNegAbs)) {
            yCurr -= 1;
            if (yCurr < yNeg) {
                yNeg -= 1;
            }
        }

        testNumber -= 1;
    }

    console.log('x - coordinate:', xCurr);
    console.log('y - coordinate:', yCurr);
    return Math.abs(xCurr) + Math.abs(yCurr);
};

function calcMaxValue(testNumber) {
    let xPos = 0,
        xNeg = 0,
        yPos = 0,
        yNeg = 0,
        xCurr = 0,
        yCurr = 0,
        currentMaxValue = 0;
    const coordinatesValuesMap = new Map();
    coordinatesValuesMap.set('00', 1);
    while (currentMaxValue < testNumber) {
        const xNegAbs = Math.abs(xNeg);
        const yNegAbs = Math.abs(yNeg);
        if ((xPos === yPos) && (xNegAbs === yNegAbs) && (xPos === xNegAbs)) {
            xCurr += 1;
            if (xCurr > xPos) {
                xPos += 1;
            }
        } else if (xPos > yPos) {
            yCurr += 1;
            if (yCurr > yPos) {
                yPos += 1;
            }
        } else if ((xPos === yPos) && (xNegAbs === yNegAbs) && (xPos !== xNegAbs)) {
            xCurr -= 1;
            if (xCurr < xNeg) {
                xNeg -= 1;
            }
        } else if ((xPos === yPos) && (xNegAbs !== yNegAbs)) {
            yCurr -= 1;
            if (yCurr < yNeg) {
                yNeg -= 1;
            }
        }
        const newValue = getNewMaxValue(xCurr, yCurr, coordinatesValuesMap);        
        currentMaxValue = newValue;
        coordinatesValuesMap.set(`${xCurr}${yCurr}`, newValue);
    }
    return currentMaxValue;
};

function getNewMaxValue(xCurr, yCurr, map) {
    let newValue = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (!(i === 0 && j === 0)) {
                newValue += map.get(`${xCurr+i}${yCurr+j}`) || 0;
            }
        }
    }
    return newValue;
}

const testNumber = 265149;
const resultDistance = calcDistance(testNumber);
const resultMaxValue = calcMaxValue(testNumber);
console.log('resultDistance:', resultDistance);
console.log('resultMaxValue:', resultMaxValue);