// const computer = {
//     name: 'MacBook',
//     isOn: false,
//     turnOn(isOn) {
//         console.log(isOn)
//         this.isOn = true;
//         return `The ${this.name} is On`;
//     },
//     turnOff() {
//         this.isOn = false;
//         return `The ${this.name} is Off`;
//     }
// };

// const server = {
//     name: 'Dell PowerEdge T30',
//     isOn: false
// };

// let result = computer.turnOn.apply(server, ['yes']);

// console.log(result);


// setTimeout(cb,timer)
setTimeout(() => {
    console.log("hello")
}, 2000);

