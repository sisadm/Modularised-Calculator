const msg = import("./../index.js")

const fs = require("node:fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "messages.json");


const read = () => {
	
	try {
		// read the content of the file
		const data = fs.readFileSync(filePath, 'utf8');


		// convert Json to object
		const obj = JSON.parse(data);

		let indexMsg;


		// using the imported Promise from index.js 
		msg.then((value) => {
			indexMsg = value.msgSend();
			console.log('inside', indexMsg)

			// push message to the object
			obj.push(indexMsg)

			// convert object bac to JSON so you can weite it back to the file 	
			const json = JSON.stringify(obj, null, 2);
			write(filePath, json);

		console.log(json)
		}).catch((error) => {
			console.error(error);
		})	

	} catch (err) {
		console.error(err);
	}	
};


// writing file synchronously
const write = (path, json) => {

	try {
		fs.writeFileSync(path, json);
		console.log("Message written to message.txt successfully!"); 
	} catch (err) {
		console.error(err);
	}
}



read();

