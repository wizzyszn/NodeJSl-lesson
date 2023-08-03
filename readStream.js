const fs = require('fs')
// create a stream to read strems of data from a file
const readStream = fs.createReadStream(__dirname + '/ReadME.txt', 'utf-8');
// create a stream to write streams of data into a file
const writeStream = fs.createWriteStream(__dirname + '/Write.txt')
// use the the event listener method 'on'
/*readStream.on('data' , function(chunk){
    console.log("new chunck received :")
    writeStream.write(chunk)

}) */
// instead on doing the above method, the pipe method seems to better

readStream.pipe(writeStream)