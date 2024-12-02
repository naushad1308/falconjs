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

var obj = new (function () {
    this.name = "john Doe",
        this.age = 25
})();
console.log(obj)