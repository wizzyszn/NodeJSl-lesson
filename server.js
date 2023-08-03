const http = require('http')
const fs = require('fs')

const myObj = [{
    name: "olubayo wisdom",
    age : "20",
    occupation : "student"
}, {
    level : "200 LVL",
    race : "Negro",
    country : "Nigerian"
}]
const server = http.createServer(function(req , res){
  
if(req.url === "/home" || req.url === "/"){
    console.log(`a request was made on: ${req.url}`);
    res.writeHead(200 , {
        'Content-type' : 'text/html'
    })
fs.createReadStream(__dirname + "/index.html").pipe(res);
  
}else if(req.url ==="/contact"){
    console.log(`a request was made on: ${req.url}`);
    res.writeHead(200, {
        'Content-type' : 'text/html'      
    })
    fs.createReadStream(__dirname + '/contact.html').pipe(res)

}else if(req.url === '/api'){
    console.log(`a request was made on: ${req.url}`);
    res.writeHead(200, {
        'Content-type' : 'application/json'
    })
    res.end(JSON.stringify(myObj))
    
} else{
    console.log(`a request was made on: ${req.url}`);
    res.writeHead(404, {
        'Content-type' : 'text/html'
    })
    fs.createReadStream(__dirname + '/404.html').pipe(res)
    
}
   
    
    

})
server.listen(3000, '127.0.0.1' )
console.log("the server is running")