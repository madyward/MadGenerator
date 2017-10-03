#!/usr/bin/env node

//DECLARE VARIABLES:
const fs = require("fs");
const buff = new Buffer(1024);

//MAKE DIRECTORIES:
//#1: src folder
fs.mkdir("./src/", function(err){
	if (err){
		return console.error(err);
	}
	console.log("Directory created successfully.");
});

//#2: components sub-folder
fs.mkdir("./src/components/", function(err){ 
	if (err){
		return console.error(err);
	}
	console.log("Sub-directory created successfully!");
});