#!/usr/bin/env node


/* COPY FILE & CONTENTS */

//STEP #1: Declare Variables
//const fs = require("fs"); <-- using fs-extra npm package in place for now
const fs = require("fs");
const fse = require("fs-extra");

//STEP #2: Open File
fse.copy("./madgenerator/src/app.js", "./src/app1.js", err => {
	if (err){
		return console.error(err);
	}
	console.log("File copy created!");
});




//#2: Read file 
//#3: Create write file
//#4: Write file
//#5: Truncate 
//#6: Read again