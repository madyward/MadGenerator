#!/usr/bin/env node

//DECLARE VARIABLES:
const fs = require("fs");

//STEPS TO COPYING CONTENTS FROM ONE FILE TO ANOTHER (order may be changed)
/*#1: 	Open file: 
	fs.open(<"path">, <"flag">, <callback>(err, fd){
		if (err){
			return console.error(err);
		}
	}) 
*/
	fs.open("./src/app.js", "r+", function(err, fd){
		if (err){
			return console.error(err);
		}
	})

	//#2: Read file 
	//#3: Create write file
	//#4: Write file
	//#5: Truncate 
	//#6: Read again