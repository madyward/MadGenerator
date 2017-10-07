#!/usr/bin/env node

const fs = require("fs");
const fse = require("fs-extra");
const readStream = fs.createReadStream(__dirname + "/readfile.js", "utf8");
const writeStream = fs.createWriteStream(__dirname + "/writefile.js");


readStream.on("data", function(chunk){
	console.log("new chunk received:");
	//Every time we get a chunk, we're going to write to a writestream.txt
	writeStream.write(chunk);
});
