const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res)=> {
    res.writeHead(200 , { 'Content-type' : 'application/json'})
    console.log("a request was made : " + req.url)
var myObj = {
    name : "wisdom",
    age : 19,
    job : "Front-End Developer"
}
    //myReadStream.pipe(res)
    res.end(JSON.stringify(myObj))

})
server.listen(4000 , '127.0.0.1')
console.log("This server is running")
//const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')


  