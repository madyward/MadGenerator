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
const buf = new Buffer(1024);

//SHORTEN FILE:
//STEP 1: Open file
fs.open("./client/readfile.txt", "r+", function(err, fd){
	if (err){
		return console.error(err);
	}
	console.log("File opened successfully!");
	console.log("Now we truncate the file...");
	//STEP 2: Truncate file
	fs.ftruncate(fd, 10, function(err){
		if (err){
			console.log(err);
		}
		console.log("File truncated successfully!");
		console.log("Now we read the same file...");
		fs.read(fd, 0, buf.length, 0, function(err,bytes){
			if (err){
				console.log(err);
			}
			//ONLY print read bytes to console!
			if (bytes > 0){
				console.log(buf.slice(0, bytes).toString);
			}
			
		});
		//STEP 3: Close file
		fs.close(fd, function(err){
			if (err){
				console.log(err);
			}
			console.log("File closed successfully!");
		});
	});
});










