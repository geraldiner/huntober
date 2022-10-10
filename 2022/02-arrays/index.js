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

// console.log(checkEquality(arr1, arr2)) // true
// console.log(checkEquality(arr1, arr3)) // false
// console.log(checkEquality(arr1, arr4)) // false
// etc.

/** DAY 2 */

const moveElementLeft = (arr, el) => {
    const elIndex = arr.indexOf(el);
    if (elIndex - 1 < 0) {
        return arr;
    }
    const prevElement = arr[elIndex - 1];
    arr.splice(elIndex-1, 1, el);
    arr.splice(elIndex, 1, prevElement);
    return arr;
}

const moveElementRight = (arr, el) => {
    const elIndex = arr.indexOf(el);
    if (elIndex + 1 > arr.length-1) {
        return arr;
    }
    const prevElement = arr[elIndex + 1];
    arr.splice(elIndex+1, 1, el);
    arr.splice(elIndex, 1, prevElement);
    return arr;
}

const arr5 = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and arr5 as arguments
// console.log(moveElementLeft(arr5, 'xyz'));
// ['xyz', 'abc', 1, 2, 'Hey!']

// console.log(moveElementLeft(arr5, 1));
// ['xyz', 1, 'abc', 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
// console.log(moveElementLeft(arr5, 'xyz'))
// ['xyz', 1, 'abc', 2, 'Hey!'] no change

// call move right function this time, with 2 and arr5 as arguments
// console.log(moveElementRight(arr5, 2))
// ['xyz', 1, 'abc', 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
// console.log(moveElementRight(arr5, 2))
// ['xyz', 1, 'abc', 'Hey!', 2] no change

// console.log(moveElementRight(arr5, 1));
// ['xyz', 'abc', 1, 'Hey!', 2]

/** DAY 3 */

const moveToFront = (arr) => {
	const hasA = arr.filter((item) => item.includes('a'));
	const mid = arr.filter((item) => !hasA.includes(item) && !item.includes('a') && item.length <= 3);
	const longerThanThreeChars = arr.filter((item) => !hasA.includes(item) && !mid.includes(item) && item.length > 3);
	return hasA.concat(mid, longerThanThreeChars);
}

const compareArrays = (arrA, arrB) => {
    if (arrA.length !== arrB.length) {
      return false;
    }
    for (let i = 0; i < arrA.length; i++) {
			if (arrA[i] !== arrB[i]) {
				return false;
			}
    }
    return true;
}

const myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
const answerArr = ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

const resultArr = moveToFront(myArr);
// console.log(resultArr, compareArrays(resultArr, answerArr));