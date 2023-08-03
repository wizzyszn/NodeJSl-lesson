
const events = require('events')
const util = require('util')

const Person = function(name , age , profession) {
    this.firstName =name;
    this.age =age;
    this.profession = profession;

}
util.inherits(Person , events.EventEmitter);

const john = new Person("John", 22 , "front-End ENGR")
const mary = new Person("Mary")
const sholes = new Person("Sholes")

const people = [john , mary , sholes];

people.forEach( ( person) => {
    person.on('introduce' , (msg) => {
        console.log( 
            `my name is ${person.firstName} ${person.secondName} and i am ${person.age} and im also a ${person.profession} and whati do for a living ${msg}`
        )
    })
}

)

john.emit('introduce' , "sucks")
