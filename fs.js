const fs = require('fs') // import fs
// read from a file
/*const getMessage = fs.readFileSync('./ReadME.txt' , 'utf-8') // this method is a sychronous method meaning it must finish executing before it moves to then next function
console.log(getMessage)
//write into a file
fs.writeFileSync('./WriteMe.txt' , getMessage) // this method is a sychronous method meaning it must finish executing before it moves to then next function
*/
//the Asynchronous version of the above methods goes as thus:

fs.readFile('./ReadME.txt','utf-8',function(err , data){
    if(err) {
        console.log(err) 
    }
    else{
        writeMeFile('./WriteMe.txt', data)
    }

})
const writeMeFile = function( path ,data) {
    fs.writeFile( path, data, (err) => {
    if(err){
        console.log(`this is the eeror ${err}`)
    }
    else{
        console.log("operation Succesfull")
    }
    })
} 
