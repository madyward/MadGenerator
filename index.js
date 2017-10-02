#!/usr/bin/env node

//DECLARE VARIABLES:
const fs = require("fs");
const buff = new Buffer(1024);

fs.mkdir("./src/", function(err){
	if (err){
		return console.error(err);
	}
	console.log("Directory created successfully.");
});
