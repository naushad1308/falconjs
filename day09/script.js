
import cart from "./cart.js"
import { render } from "./render.js";

render("calling render function from script.js")
console.log(cart())


const module = document.querySelector("#module")

module.innerText = "hello"

