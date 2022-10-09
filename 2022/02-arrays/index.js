/** DAY 1 */

const checkEquality = (arrA, arrB) => {
    if (arrA.length !== arrB.length) {
        return false;
    }
    if (arrA[0].length !== arrB[0].length) {
        return false;
    }
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrA[i].length; j++) {
            if (arrA[i][j] !== arrB[i][j]) {
                return false;
            }
        }
    }
    return true;
}

// each of these arrays have 3 nested arrays of 3 strings each
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

console.log(checkEquality(arr1, arr2)) // true
console.log(checkEquality(arr1, arr3)) // false
console.log(checkEquality(arr1, arr4)) // false
// etc.
