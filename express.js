const express = require('express')
const app = express()
var bodyParser = require('body-parser')
//const ejsMate = require('ejs-mate')
const ejs = require('ejs')
app.set('view engine' , 'ejs')
//app.engine('ejs', ejsMate)

app.use('/assets' , express.static('assets')) // handles static files
var urlencodedParser = bodyParser.urlencoded({ extended: false }) //use  this handler to handle forms data
app.get('/home' , function(req ,res){
res.render('home')
})
app.get('/', function(req ,res){
    res.send('welcome to express js')
})
app.get('/contact', function(req ,res){
    res.render('contact', {qs : req.query})
})
app.post('/contact',urlencodedParser, function(req ,res){
    console.log(req.body)
    res.render('contact-success', {data : req.body})
})
const hobbies = ['fighting', 'si nging', 'anime', 'probably my girlfriend']
app.get('/profile/:name' , function(req ,res){
    res.render('profile' , {
        person : req.params.name,
        age : 23,
        country : "nigerian",
        hobbies : hobbies,
        
    })
})
  
app.listen(3000 , '127.0.0.1');
console.log("express server is running.........")