
let searchInput = document.querySelector("#searchInput")

let debounce = (func, delay) => {
    // console.log('debounce')

    let timeOutId;
    return function (...args) {
        clearTimeout(timeOutId)

        timeOutId = setTimeout(() => {
            func(...args)
        }, delay);
    }
}

const myFunction = (e) => {
    // console.log('myFunction')
    let query = e.target.value
    // console.log(e.target.value)


    fetch(`https://fakestoreapi.com/products/category/${query}`)
        .then(res => res.json())
        .then(data => console.log(data))

}

searchInput.addEventListener('input', debounce(myFunction, 1000))













// const debounce = (func, delay) => {
//     // console.log("debounce")
//     let timOutId
//     return function (...args) {
//         clearTimeout(timOutId)
//         timOutId = setTimeout(() => {
//             // console.log("setTimeout")
//             func(...args)

//         }, delay);
//     }
// }

// let myFunction = (e) => {
//     let query = e.target.value
//     // console.log(e.target.value)
//     // console.log("Api Call")
//     fetch(`https://fakestoreapi.com/products/category/${query}`)
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// searchInput.addEventListener('input', debounce(myFunction, 500))



