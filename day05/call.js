const person1 = {
    name: "john",
    age: 25,

    sayName(name) {
        this.name = name
        console.log(this.name)
    },
    sayAge: function () {
        return this.age
    }
}

const person2 = {
    name: "abc",
    age: 15,
    fly() {
        console.log('Fly');
    },

}


// person1.sayName("thakur")
person1.sayName.call(person2, 'thakur');
person1.sayName.apply(person2, ['thakur']);
let fn = person1.sayName.bind(person2, 'thakur');
fn()

// person1.sayAge.call(person2);


// function getName(name) {
//     console.log(name)
// }
// getName("thakur")
