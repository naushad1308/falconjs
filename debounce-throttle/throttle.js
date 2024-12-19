// const btn = document.querySelector("#btn")

// Method 2
// let throttle = (func, delay) => {
//     let lastCallTime = 0
//     return function (...args) {
//         let currentTime = new Date().getTime()
//         if ((currentTime - lastCallTime) < delay) {
//             return;
//         }
//         lastCallTime = currentTime
//         func(...args)
//     }
// }


// Method1

let throttle = (func, delay) => {

    let shouldCall = true
    return function (...args) {
        if (!shouldCall) {
            return;
        }
        func(...args)
        shouldCall = false
        setTimeout(() => {
            shouldCall = true
        }, delay);
    }
}

// let myFunction = (e) => {
//     console.log("button Clicked")
// }

// btn.addEventListener('click', throttle(myFunction, 1000))


const h1 = document.querySelector("#wSize")

const resizeFunction = (e) => {
    console.log("window resized")
    let w = window.innerWidth
    let h = window.innerHeight
    // console.log(`window width:${w},window Height:${h}`)
    h1.innerHTML = `window width:${w},window Height:${h}`
}
window.addEventListener('resize', throttle(resizeFunction, 1000))

