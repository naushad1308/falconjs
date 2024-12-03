// 1.pending
// 2.resolve
// 3.reject



// let myPromise = new Promise(function (resolve, reject) {

//     let amount = 100
//     if (amount === 1000) {
//         resolve("Hurray! I have bought a new shirt")
//     } else {
//         reject("so sad i dont have enough money")
//     }
// })

// myPromise.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })


function register() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("register")
            res()
        }, 1000)
    })
}
function sendEmail() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("sendEmail")
            res()
        }, 2000);
    })
}

function login() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("login")
            rej("Login failed")
        }, 1000);
    })
}
function display() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("display")
            res()
        }, 500);
    })
}

function edit() {
    console.log("Edited")
}

// register()
//     .then(sendEmail)
//     .then(login)
//     .then(display)
//     .then(edit).catch((err) => {
//         console.log(err)
//     })




async function authentication() {
    try {
        await register()
        await sendEmail()
        await login()
        await display()

    } catch (err) {
        console.log(err)
    }
}
authentication()

console.log("Other app are running")