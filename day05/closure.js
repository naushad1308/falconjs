// function getResult(num1) {
//     console.log("outer Function")
//     let num2 = 2
//     return function () {
//         let num3 = 1;
//         return num1 + num2 + num3
//     }
// }


// let sum = getResult(1)
// let result = sum()
// console.log(result)



// closure = a function that has access of variables from outer/lexical scope



// short Tricky Interview question
// console.log("hi")

// setTimeout(() => {
//     console.log('hello')
// }, 0)

// console.log("Bye")

//hi hello bye


// for (let index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log(index);
//     }, index * 1000);
// }

// var count = 5
// const counter = {
//     next: () => console.log(this.count),
//     current: () => this.count
// };
// counter.next()


// function Counter() {
//     this.count = 0;
// }

// Counter.prototype.next = () => {
//     return this.count;
// };

// Counter.prototype.current = () => {
//     return ++this.next;
// }

// ""*""