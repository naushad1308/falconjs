// function fetchUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => res.json())
//         .then((data) => display(data))

// }
async function fetchUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    let userData = await res.json()
    display(userData)

}

function display(users) {
    let userContainer = document.querySelector('#userContainer')
    console.log(users)
    users.map((user) => {
        let h1 = document.createElement('h1')
        h1.style.background = "teal"
        h1.innerText = user.name
        userContainer.append(h1)
    })

}
fetchUsers()