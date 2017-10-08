#!/usr/bin/env node

const fs = require("fs");
const fse = require("fs-extra");
const readStream = fs.createReadStream(__dirname + "/readfile.js", "utf8");
const writeStream = fs.createWriteStream(__dirname + "/writefile.js");


fse.copy("./src/app.js", "./src/app1.js", {preserveTimestamps: true}, err => {
	if (err){
		return console.error(err);
	}
	console.log("File copy created!");
});


