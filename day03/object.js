"use strict";


// let cara = {
//     name: "swift",
//     color: "red",
//     speed: 200,
//     isElectric: false,
//     isAutomatic: true,

// }  // object literals


// let carObj = {
//     name: "swift",
//     model: 2001
// }

// object contructor
// var vehical = new Object();

// 3. object'create method  ❌
// var car = Object.create({
//     name: "swift",
//     color: "red",
//     speed: 200,
//     isElectric: false,
//     isAutomatic: true,

// })
// console.log(car)

// 4. Function constructor


// let x = this;

// console.log(x)

// function x() {

//     console.log(this)

// }
// x()


// let car = {
//     name: "swift",
//     color: "red",
//     speed: 200,
//     isElectric: false,
//     isAutomatic: true,
//     display: function () {
//         console.log(this.display)
//     }

// }

// // console.log(car.name)
// car.display()

// function Person(name, age) {
//     this.name = name;
//     this.age = age
// }


// let person1 = new Person('john', 25)

// console.log(this.alert)


//5. function contructor with prototye  ❌

// function Person(){
//     Person().prototype.name = "john"
//     var object  =  new Person()
// }

// 6. Create Object using class

// let car = {
//     name: "audi",
//     display() {
//         console.log(this.name)
//     }
// }
// car.display()

// class Person {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age
//     }
// }
// let person1 = new Person("john", 25)
// console.log(person1)

// 7  Singleton Pattern

// var obj = new (function () {
//     this.name = "john Doe",
//         this.age = 25
// })();
// console.log(obj)



// Thakur
// object literals
const person = {
    name: "john",
    age: 25,
    gender: "male",
    isAged: false,
    skills: ['js', 'react', 'mongodb'],
    adress: {
        hNo: 24,
        street: "abc",
        pincode: 24512,
    },
    sayName: function () {
        console.log(person.name)
    }
}

// console.log(person.name, person.isAged,person.skills)
// console.log(person.skills[2])

// console.log(person.sayName())

// Function contructor
function Person(name, age, skill, address) {
    this.name = name,
        this.age = age,
        this.skill = skill,
        this.address = address,
        this.sayName = function () {
            console.log(this.name)
        }

}
let skills = ['js', 'react', 'mongodb']
let add = {
    hNo: 24,
    street: "abc",
    pincode: 24512,
}
let person1 = new Person("john", 25, skills, add)
console.log(person1)
let person2 = new Person("abc", 15, skills, add)
console.log(person1.sayName())
console.log(person2)
