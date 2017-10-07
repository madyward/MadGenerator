#!/usr/bin/env node


/* MAKE DIRECTORIES */
/*TO-DOS:
	1) Need to add empty string var & function that will reference specific new dir name. */

//STEP #1: DECLARE VARIABLES:
const fs = require("fs");
const fse = require("fs-extra");
const rootDir = "Directory created successfully!";
const subDir = "Sub-directory created successfully!";
//const buff = new Buffer(1024);


//STEP #2: ROOT DIRECTORIES
fse.mkdir("./public/", err => {	// <--- public folder
	if (err){
		return console.error(err);
	}
	console.log(rootDir);
})

fse.mkdir("./src/", err => {	// <--- src folder
	if (err){
		return console.error(err);
	}
	console.log(rootDir);
});


//STEP #3: CLIENT SUB-DIRECTORIES
fse.mkdir("./src/components/", err => {	// <--- components sub-folder
	if (err){
		return console.error(err);
	}
	console.log(subDir);
});

fse.mkdir("./src/reducers/", err => {	// <--- reducers sub-folder
	if (err){
		return console.error(err);
	}
	console.log(subDir);
})









