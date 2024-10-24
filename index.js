import {add, subtract, multiply, divide} from "./esm/calculator.mjs";

const readFile = import("./commonjs/utils.cjs")

const message = process.argv[2];

let msgArr = message.split('');


//function msgSend()  {  return `${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${add(msgArr[0], msgArr[2])}`}

let msgSend;

function removeWhiteSpace(arr) { return arr.filter((item) => item != ' ')};

msgArr = removeWhiteSpace(msgArr);

if(!Number(msgArr[0]) || !Number(msgArr[2])) {
	console.log('Please use numbers!');
} else {
	

	if(msgArr[1] == '+') {
		console.log(`${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${add(msgArr[0], msgArr[2])}`);
		msgSend = () => {  return `${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${add(msgArr[0], msgArr[2])}`};
	}

	if(msgArr[1] == '-') {
		console.log(`${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${subtract(msgArr[0], msgArr[2])}`);
		msgSend = () => {  return `${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${subtract(msgArr[0], msgArr[2])}`};
	}

	if(msgArr[1] == '*') {
		console.log(`${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${multiply(msgArr[0], msgArr[2])}`);
		msgSend = () => {  return `${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${multiply(msgArr[0], msgArr[2])}`};
	}

	if(msgArr[1] == '/') {
		console.log(`${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${divide(msgArr[0], msgArr[2])}`);
		msgSend = () => {  return `${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${divide(msgArr[0], msgArr[2])}`};
	}
	
}







export { msgSend } 