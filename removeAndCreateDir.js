const fs = require('fs')
//delete a file
/*const filepath = './ReadME.txt'
fs.unlink( filepath , function(err){ 
    if(err){
        console.log(`An error occurred of type ${err}`)
    }
    else{
        console.log("the file has been deleted succesfully")
    }
}
)*/

//create a file directory using node.js synchronously
//fs.mkdirSync("textMe.txt")
// remove the directory
 //fs.rmdirSync('./textMe.txt')
/*
 fs.mkdir('hellcall',function(){
    fs.readFile('./ReadME.txt', 'utf8' , function(err , data){
        fs.writeFile('./hellcall/wrei.txt' , data , (err) => {
            if(err){
                console.log(err)
            }
            else{
                console.log("the file was succesfullly created")
            }
        })
    })
 })
*/
// unlink files and delete directories
fs.unlink('./hellcall/wrei.txt' ,function(){
   fs.rmdir('./hellcall' , (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("operation successful")
    }

   })
})
