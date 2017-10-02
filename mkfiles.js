#!/usr/bin/env node

//DECLARE VARIABLES:
const fs = require("fs");
const readableStream = fs.createReadStream("./src/app.js");
var writableStream = fs.createWriteStream("main.js");

readableStream.pipe(writableStream);