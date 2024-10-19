const fs = require("fs");
const path = require("path");

const filePath = path.join(_dirname, "message.json");

module.exports = {
	readFile: (file) => fs.readFile
}