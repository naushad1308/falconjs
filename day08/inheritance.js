class Animal {
    constructor(legs, eyes) {
        this.legs = legs;
        this.eyes = eyes
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

// new Animal()

class childAnimal extends Animal {
    constructor(name, color, legs) {
        super(2, 'dull')
        this.name = name;
        this.color = color
    }

    fly() {
        console.log(this.name + ' is flying');
    }
}


let falcon = new childAnimal("falcon", "white", 2)
falcon.walk()

// console.log(falcon)
// falcon.fly()


// let a1 = new Animal(4)
// console.log(a1)
// a1.walk()
let b = [2, 4, 5, 4, 6, 4]
// let b = {}



var a = fetch('json')
console.log(a instanceof Array)
// console.log(Array.isArray(a))

