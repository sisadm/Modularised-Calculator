import {add, subtract, multiply, divide} from "./esm/calculator.mjs";

const readFile = import("./commonjs/utils.cjs")

const message = process.argv[2];

let msgArr = message.split('');


function msgSend()  {  return `${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${add(msgArr[0], msgArr[2])}`}

function removeWhiteSpace(arr) { return arr.filter((item) => item != ' ')};

msgArr = removeWhiteSpace(msgArr);

if(msgArr[1] == '+') {
	console.log(`${msgArr[0]} ${msgArr[1]} ${msgArr[2]} = ${add(msgArr[0], msgArr[2])}`);
}


readFile;


export { msgSend } 