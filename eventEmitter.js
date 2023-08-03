const events = require('events')
const util = require('util')
/*
const eventEmitter = new events.EventEmitter()

eventEmitter.on('emitter' , (msg) => {
console.log(msg)
})

eventEmitter.emit('emitter' , "this event was fired") 

console.log(eventEmitter)
*/
const Person = function(name){
    this.myName = name;
}

util.inherits(Person , events.EventEmitter)

let john = new Person("John");
let ryu = new Person("Ryu");
let wisdom = new Person("wisdom");


const people = [john , ryu , wisdom]

people.forEach(
    (person) => {
        person.on("speak" , function(msg) {
           console.log(person.myName + " said: " + msg)
        })
    }
)
john.emit('speak', " i love you")