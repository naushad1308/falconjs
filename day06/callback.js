// Register
// send welcom email
// Login
// get User Data
// display user


function waitForThreeSec() {
    let ms = 3000 + new Date().getTime()
    while (new Date().getTime() < ms) {
    }
}


function register(cb) {
    setTimeout(() => {
        console.log("register")
        cb()
    }, 1000)

}
function sendEmail(cb) {
    setTimeout(() => {
        console.log("sendEmail")
        cb()
    }, 2000);
}

function login(cb) {
    setTimeout(() => {
        console.log("login")
        cb()
    }, 1000);
}
function display(cb) {
    setTimeout(() => {
        console.log("display")
        cb()
    }, 500);
}
function edit() {
    setTimeout(() => {
        console.log("Edited")

    }, 500);
}
// register()
// sendEmail()
// login()
// display()


// Callback Hell
register(() => {
    sendEmail(() => {
        login(() => {
            display(() => {
                edit()
            })
        })
    })
})

// login()
// display()



console.log("Other app are running")

