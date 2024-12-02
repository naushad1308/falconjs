// console.log(Array.prototype.filter)

// let arr = [2, 4, 5, 6, 4,]

// let filteredArray = arr.filter((elem, i, array) => {
//     return elem > 4
// })

// console.log(filteredArray)

function isOdd(number) {
    return number % 2;
}

function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
// console.log(results);

let arr = [10, 1, 3, 4, 8, 9]

console.log(typeof (arr))

// let filteredArray = arr.filter(function (number) {
//     return number % 2;
// })

// console.log(filteredArray)