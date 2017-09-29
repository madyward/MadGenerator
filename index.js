//WRITEABLE STREAMS -- allow node js to write data to a stream
//READABLE STREAMS -- allow node to read data from a stream
//DUPLEX --can read and write to a stream
var fs = require("fs");
var readStream = fs.createReadStream(__dirname + '/readfile.txt', 'utf8');

//*************add this to do a write stream***************/
var writeStream = fs.createWriteStream(__dirname + '/writefile.txt')
//Going to pass the data in chunks
//There's an event with createReadStream that allows us to listen to data
//every time file passes a chunk of data on, we listen

//we're splitting the writefile file to receive the data more quickly
readStream.on('data', function(chunk){
	console.log('new chunk received:');
	//every time we get a chunk, we're going to write to a writestream.txt
	writeStream.write(chunk);
});