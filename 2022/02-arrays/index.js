/** DAY 1 */

const compareGrids = (arrA, arrB) => {
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

// console.log(compareGrids(arr1, arr2)) // true
// console.log(compareGrids(arr1, arr3)) // false
// console.log(compareGrids(arr1, arr4)) // false
// etc.

/** DAY 2 */

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

const moveElementLeft = (arr, el) => {
    const elIndex = arr.indexOf(el);
    if (elIndex - 1 < 0) {
        return arr;
    }
    const prevElement = arr[elIndex - 1];
	arr[elIndex - 1] = el;
	arr[elIndex] = prevElement;
    // arr.splice(elIndex-1, 1, el);
    // arr.splice(elIndex, 1, prevElement);
	return arr;
}
const moveElementRight = (arr, el) => {
    const elIndex = arr.indexOf(el);
    if (elIndex + 1 > arr.length-1) {
        return arr;
    }
    const nextElement = arr[elIndex + 1];
	arr[elIndex + 1] = el;
	arr[elIndex] = nextElement;
	return arr;
    // arr.splice(elIndex+1, 1, el);
    // arr.splice(elIndex, 1, nextElement);
}
let arr5 = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and arr5 as arguments
arr5 = moveElementLeft(arr5, 'xyz');
// console.log(compareArrays(arr5, ['xyz', 'abc', 1, 2, 'Hey!']));
// ['xyz', 'abc', 1, 2, 'Hey!']

arr5 = moveElementLeft(arr5, 1);;
// console.log(compareArrays(arr5, ['xyz', 1, 'abc', 2, 'Hey!']));
// ['xyz', 1, 'abc', 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
arr5 = moveElementLeft(arr5, 'xyz');
// console.log(compareArrays(arr5, ['xyz', 1, 'abc', 2, 'Hey!']));
// ['xyz', 1, 'abc', 2, 'Hey!'] no change

// call move right function this time, with 2 and arr5 as arguments
arr5 = moveElementRight(arr5, 2);
// console.log(compareArrays(arr5, ['xyz', 1, 'abc', 'Hey!', 2]));
// ['xyz', 1, 'abc', 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
moveElementRight(arr5, 2);
// console.log(compareArrays(arr5, ['xyz', 1, 'abc', 'Hey!', 2]));
// ['xyz', 1, 'abc', 'Hey!', 2] no change

moveElementRight(arr5, 1);
// console.log(compareArrays(arr5, ['xyz', 'abc', 1, 'Hey!', 2]));
// ['xyz', 'abc', 1, 'Hey!', 2]

/** DAY 3 */

const moveToFront = (arr) => {
	const hasA = arr.filter((item) => item.includes('a'));
	const mid = arr.filter((item) => !hasA.includes(item) && !item.includes('a') && item.length <= 3);
	const longerThanThreeChars = arr.filter((item) => !hasA.includes(item) && !mid.includes(item) && item.length > 3);
	return hasA.concat(mid, longerThanThreeChars);
}

const myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
const answerArr = ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

const resultArr = moveToFront(myArr);
// console.log(resultArr, compareArrays(resultArr, answerArr));

/** DAY 4 */

const moveElementUp = (arr, el) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			const currRow = arr[i];
			if (currRow[j] === el) {
				const prevRowIndex = i-1
				if (prevRowIndex < 0) {
					return arr;
				}
				const prevRowArr = arr[prevRowIndex];
				const prevElement = prevRowArr[j];
				prevRowArr[j] = el;
				currRow[j] = prevElement;
				return arr;
				// prevRowArr.splice(j, 1, el);
				// arr[i].splice(j, 1, prevElement);
				// arr.splice(prevRowIndex, 1, prevRowArr);
				// arr.splice(i, 1, arr[i]);
			}
		}
	}
}
const moveElementDown = (arr, el) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			const currRow = arr[i];
			if (currRow[j] === el) {
				const nextRowIndex = i+1
				if (nextRowIndex > arr.length - 1) {
					return arr;
				}
				const nextRowArr = arr[nextRowIndex];
				const nextElement = nextRowArr[j];
				nextRowArr[j] = el;
				currRow[j] = nextElement;
				return arr;
				// nextRowArr.splice(nextRowIndex, 1, el);
				// arr[i].splice(j, 1, nextElement);
				// arr.splice(nextRowIndex, 1, nextRowArr);
				// arr.splice(i, 1, arr[i]);
			}
		}
	}
	return arr;
}

let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

// call move up function with 'h' and myGrid
myGrid = moveElementUp(myGrid, 'h');
// console.log(compareGrids(myGrid, [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]));
// [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
myGrid = moveElementUp(myGrid, 'h');
// console.log(compareGrids(myGrid, [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]));
// [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
myGrid = moveElementUp(myGrid, 'h');
// console.log(compareGrids(myGrid, [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]));

// call move down function this time, with 'f' and myGrid as arguments
myGrid = moveElementDown(myGrid, 'f');
// console.log(compareGrids(myGrid, [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]));
// [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
myGrid = moveElementDown(myGrid, 'f');
// console.log(compareGrids(myGrid, [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]));
// [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]