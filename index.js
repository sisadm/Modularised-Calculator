import {add, subtract, multiply, divide} from "./calculator.js";





const message = process.argv[2];

let msg = message.split('');

function removeWhiteSpace(arr) { return arr.filter((item) => item != ' ')};

msg = removeWhiteSpace(msg);

console.log(msg)
