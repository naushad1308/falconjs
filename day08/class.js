// Function Constructor


// function Person(name, age, skills, address) {
//     this.name = name;
//     this.age = age,
//         this.skills = skills,
//         this.address = address
//     this.setName = function (name) {
//         this.name = name
//     }
//     this.getName = function () {
//         return this.name
//     }
// }

// let p1 = new Person("john", 25, ['html', 'js'], { hNo: 124, street: "abc", pincode: 24541 })
// console.log(p1)
// console.log(p1.getName())
// p1.setName("sumit")
// console.log(p1.getName())


class Person {
    constructor(name, age, skills, address) {
        this.name = name;
        this.age = age;
        this.skills = skills;
        this.address = address;
        // this.setName = function (name) {
        //     this.name = name
        // }
        // this.getName = function () {
        //     return this.name
        // }

    }
    setName(name) {
        this.name = name
    }
    get getName() {
        return this.name
    }

}

let p1 = new Person("john", 25, ['html', 'js'], { hNo: 124, city: "delhi" })
console.log(p1)
console.log(p1.getName)
p1.setName("abc")
console.log(p1.getName)

const p = {
    name: "sumit",
}
console.log(p['name'])

