import {add, subtract, multiply, divide} from "./calculator.js";





const message = process.argv[2];

let msgArr = message.split('');

function removeWhiteSpace(arr) { return arr.filter((item) => item != ' ')};

msgArr = removeWhiteSpace(msgArr);

if(msgArr[1] == '+') {
	console.log(`${msgArr[0]} + ${msgArr[2]} = ${add(msgArr[0], msgArr[2])}`);
}




