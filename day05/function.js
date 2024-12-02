// why do we need function


// function getUser(a = 5, b = 7) {
//     // console.log(a + b) // 8
//     return 'hello'
//     // return a + b

// }

// console.log(getUser(1)) // 2

// let result = getUser(10)
// console.log(result)

// let getUser = greet => console.log(greet)  //flat arrow function

// let getUser = greet => greet  //flat arrow function
// console.log(getUser("good morning"))

// let sum = (a, b) => {
//     console.log(a + b) // 7
//     return a + 2
// }

// console.log(sum(2, 5)) // 4

// let sum = (a, b) => {
//     console.log(a + b) // 7
//     return
//     console.log('hello') // it will not execute as we have returned
// }

// console.log(sum(2, 5))


// function greet(grt, userName) {
//     console.log("hello" + grt, userName())
// }

// greet('Good Morning', function userName() {
//     return "John"
// })

// function clc(a, b, arithmatic) {
//     console.log(arithmatic(a, b))
// }

// // clc(10, 2, sum)
// clc(10, 2, sub)
// clc(10, 2, div)
// function sum(a, b) {
//     return a + b
// }
// function sub(a, b) {
//     return a - b
// }
// function div(a, b) {
//     return a / b
// }


// function a() {
//     console.log("hello")
//     return function b() {
//         console.log("good Morning")
//         return function c() {
//             return "john"
//         }
//     }

// }

// let fnb = a() // after calling function a here it will return function B here
// let fnc = fnb() // it will return function c
// console.log(fnc())



// Function Currying
function curry(f) { // curry(f) does the currying transform
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c)
            }
        };
    };
}

// usage
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)(1));

// Regular function
function simpleFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}

// Curried function
function curriedFunction(param1) {
    return function (param2) {
        return function (param3) {
            return param1 + param2 + param3;
        };
    };
}

// (function a(date) {   //IIFE
//     console.log(date.toDateString())
// })(new Date())