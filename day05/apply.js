const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn(isOn) {
        console.log(isOn)
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let result = computer.turnOn.apply(server, ['yes']);

console.log(result);


// setTimeout(cb,timer)
setTimeout(() => {
    console.log("hello")
}, 2000);



// call():
// The call() method immediately invokes the function with the specified this value and individual arguments passed separately.
//     apply():
// The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments.
//     bind():
// The bind() method creates a new function with a specified this value and optional pre - bound arguments.This new function can be invoked later.