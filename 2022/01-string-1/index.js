const NUM_TO_STR = {
	'0': 'O',
	'5': 'S',
	'1': 'I',
	'6': 'G',
	'2': 'Z',
	'7': 'L',
	'3': 'E',
	'8': 'B',
	'4': 'h',
	'9': 'q'
}

const STR_TO_NUM = {
	'O': '0',
	'S': '5',
	'I': '1',
	'G': '6',
	'Z': '2',
	'L': '7',
	'E': '3',
	'B': '8',
	'h': '4',
	'q': '9',
}

const parseString = (str) => {
	return str.split("").reduce((prev,char) => {
		// if current character is a number that needs to be converted
		if (NUM_TO_STR[char]) {
			return prev+NUM_TO_STR[char];
		}
		// if current character is a letter that needs to be converted
		if (STR_TO_NUM[char]) {
			return prev+STR_TO_NUM[char];
		}
		// if current character has no mapping, use it as is
		return prev+char;
	});
}

const compareString = (str1, str2) => {
	return str1 === str2;
}


const example1 = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.";
const result1 = "PRO-TIP #498: IT'S NICE TO SAY HELLO.";

const run1 = parseString(example1);
const comparison1 = compareString(run1, result1);
console.log({run1, comparison1});