#!/usr/bin/env node

//STEP #1: Declare Variables
const fs = require("fs");
const fse = require("fs-extra");
const readStream = fs.createReadStream(__dirname + "/readfile.js", "utf8");
const writeStream = fs.createWriteStream(__dirname + "/writefile.js");

readStream.on("data", function(chunk){
	console.log("new chunk received:");
	//Every time we get a chunk, we're going to write to a writestream.txt
	writeStream.write(chunk);
});

//STEP #2: Open File
//#2: Read file 
//#3: Create write file
//#4: Write file
//#5: Truncate 
//#6: Read again
//#7: Close

//BELOW WORKS! BUT BOTH FILES ARE CREATED AND CONTENTS ARE NOT VISIBLE TO USER.

fse.copy("./madgenerator/src/app.js", "./src/app1.js", err => {
	if (err){
		return console.error(err);
	}
	console.log("File copy created!");
});