const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 0, "Lemon", "Kiwi");
let newFruits = fruits.toSpliced(2, 0, "Lemon", "Kiwi");

console.log(fruits)
console.log(newFruits)
