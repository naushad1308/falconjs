// variables(identifier) are container to store any values
// var let and const are keyword in js to declare a variable

// scopes -  global - local - blocked - functional - lexical
// lexical scope -  the scope of a variable is determined by its position in the code
// block -  the variable is accessible in the block where it is declared and in all the blocks
// inside the block where it is declared
// let and const are block scoped while var is function scoped
// let and const are hoisted but not initialized while var is hoisted and initialized with undefined
// let and const are not re-declared while var can be re-declared
// let and const are not re-assigned while var can be re-assigned


//difference b/w var let and const
// 1. var -- it allows redeclaration and redefined  ------ functional  scope but not blocked scope and it is hoisted
// ex-
// var name = "John"
// var name = "Thakur"  //redeclaration
// name = "Sravanthi" // redefined
// console.log(name) //Thakur

// functional scope example
// var user = "john"
// console.log(user)

// var user = "john"
// console.log(user)
// function getUser() {
//     var user = "Thakur"
//     console.log(user) //  Thakur
// }

// console.log(user) // john

// var user = "John"
// console.log(user)   //john

// if (true) {
//     var user = "Thakur"
//     console.log(user)  // john x - thakur
// }
// console.log(user) // thakur


// 2. let --it does not allow redeclaration but allow  redefined------ blocked scope

//ex.

// // console.log(age)
// let userAge = 25
// console.log(userAge)

// if (true) {
//     let userAge = 102
//     console.log(userAge)
// }
// console.log(userAge)
// function getUser() {
//     let user = "Thakur"
//     console.log(user)
// }
// getUser()
// console.log(user)


//3.  const --it does not allow both redeclaration and redefined----- block scope and immutable
// const gender = 'male'
// const gender  = "female" // redeclaration not allowed
// gender = "female" // redeclaration not allowed


// 3 difference hoisting
// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.Remember that JavaScript only hoists declarations, not initialisation.Let's take a simple example of variable hoisting,

// what is difference between undefined and is not defined


// var userName = "john"
// console.log(userName)
// function getUserName() {
//     console.log("hello there")
// }
// getUserName()

// what is the difference bewtween scope -   1  global 2 local( blocked) - functonal - lexical scope

// var emp = "abc"  // glable

// if (true) {
//     var age = 25
// }

// let userName = "johnDoe"
// function getName() {

//     if (true) {
//         let age = 25
//         console.log(userName, age)
//     }
// }
// getName()


// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.Remember that JavaScript only hoists declarations, not initialisation.Let's take a simple example of variable hoisting,


// var user
// console.log(user)


//code execute =  creation and execution phase

// 1 creation  =  variable and function and class declaration and memory alloction
//2 code execution = code execute

// var a = undefined


// console.log(a) // undefined
// var a

// function getUser() {
//     console.log("hello there")
// }

// getUser()

// function getUser() {
//     console.log("hello there")
// }

// let user
// console.log(user)
// const user = "john"

// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.Remember that JavaScript only hoists declarations, not initialisation.Let's take a simple example of variable hoisting,

// console.log(userName)   // undefined
// var userName = "hello"
// console.log(userName)  // hello

// getUser()
// function getUser() {
//     // var userName = undefined
//     console.log(userName)   // - undefined
//     var userName = "john"  //
//     console.log(userName)  // john
// }

// getUser()

// console.log(userName)     // hello


// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution.Remember that JavaScript only hoists declarations, not initialisation.Let's take a simple example of variable hoisting,

var age = undefined  //1  creation and memory   2  code execution


var age = 25


// console.log(salary)  //undefined
// var salary = 25000
// console.log(salary)  // 25000

// function getSalary() {
//     // let salary =  undefinded
//     console.log(salary)  // undefined - 25000
//     let salary = 1000
//     console.log(salary)  // 1000
// }

// getSalary()
// console.log(salary)  // 25000

// console.log(age)   // ref error
// var age = undefined
// console.log(age)   //undefined

// if (true) {
//     console.log(employee) // ref error
//     var employee = ["a", "b"]
//     console.log(employee) // a,b
// }
// const age = undefined
// age = 25
// console.log(age) // can not reassign

// var message;
// console.log(message);
// message = "The variable Has been hoisted";

// getName() // hello

// let getName = () => {
//     console.log('hello')
// }


// console.log(age)
// var age = 25
// console.log(age)

// if (true) {
//     console.log(age)
//     var age = "mohan"
//     console.log(age)
// }
// getName()
// console.log(age)