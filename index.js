//WRITEABLE STREAMS -- allow node js to write data to a stream
//READABLE STREAMS -- allow node to read data from a stream
//DUPLEX --can read and write to a stream
//--const fs = require("fs");
//--const readStream = fs.createReadStream(__dirname + "/readfile.txt", "utf8");
//*************ADD THIS to do a write stream:***************/
//--const writeStream = fs.createWriteStream(__dirname + "/writefile.txt");
//--const readFile = fs.readFile("./src/index.js");


//Going to pass the data in chunks. There's an event with createReadStream 
//that allows us to listen to data. Every time file passes a chunk of data on, 
//we listen. We're splitting the writefile file to receive the data more quickly
//---readStream.on("data", function(chunk){
//--	console.log("new chunk received:");
	//Every time we get a chunk, we're going to write to a writestream.txt
//--	writeStream.write(chunk);
//--});


//DECLARE VARIABLES:
const fs = require("fs");

//READ DIRECTORIES:
fs.readdir("./src/", function(err, files){
	if (err){
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file);
	});
});













