// Fetch products
// product render
// searchFilter
// category filters
// tab filters
// cart
// accordion
// Load more button API cal
// Light and Dark mode
// Multistep progress bar
// Scroll Indicator
// Pagination

const mobileMenu = document.getElementById('mobile-menu');
let productApi = "https://fakestoreapi.com/products"
// Fetch Products

let allProducts = []
let cart = []

let fetchProducts = async () => {
    try {
        let response = await fetch(productApi)
        let data = await response.json()
        // console.log(data)
        allProducts = data
        renderProducts(data)
        return data
    } catch (err) {
        console.log("Something went wrong", err)
    }
}
fetchProducts()

// Render Products
let renderProducts = (products) => {
    console.log(products)
    let productContainer = document.querySelector("#productContainer")
    productContainer.innerHTML = ''
    products.forEach((product) => {
        let productCard = document.createElement("div")
        productCard.innerHTML = ` <div class="relative border rounded-lg p-4 shadow hover:shadow-lg transition-shadow h-[280px]">
                        <img src="${product.image}" alt="Product Image"
                            class="w-full h-32 object-cover mb-2">
                        <h3 class="font-semibold py-1 truncate hover:text-clip">${product.title}</h3>
                        <div class = "absolute bottom-4">
                        <div class="flex justify-between py-1 ">
                            <span class="text-gray-600">&#8377; ${product.price}</span>
                            <span class="text-gray-600">Rating:${product.rating.rate}</span>
                        </div>

                        <button  class="mt-2 w-full bg-yellow-600 text-black px-4 py-2 rounded add-to-cart"
                            data-title="Product Title 1" data-price="$19.99" data-id = "${product.id}">Add to Cart</button>
                    </div>
                        </div>`
        productContainer.appendChild(productCard)
    })

    const addToCartButtons = document.querySelectorAll('.add-to-cart')
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id')
            console.log(productId)
            cartMenu.classList.remove('translate-x-full');
            addToCart(productId)
        })
    })


}

// Search Filter
let searchInput = document.querySelector("#searchInput")

//Debouncing
let searchInputDebounce = (func, delay) => {
    let setTimeOutID
    return function (...args) {
        clearTimeout(setTimeOutID)
        setTimeOutID = setTimeout(() => {
            func(...args)
        }, delay);
    }
}
let searchInputFunction = async (e) => {
    let searchValue = e.target.value.toLowerCase()
    // console.log(searchValue)

    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json()
    let filteredProducts = data.filter((product) => {
        return product.title.toLowerCase().includes(searchValue)
    })
    renderProducts(filteredProducts)
}
searchInput.addEventListener('input', searchInputDebounce(searchInputFunction, 500))


// Category Filters
let categoryRadios = document.querySelectorAll('input[name="category"]');

categoryRadios.forEach(radio => {
    radio.addEventListener('change', async (e) => {
        let categoryValue = e.target.value
        if (categoryValue == 'products') {
            let res = await fetch(`https://fakestoreapi.com/products/`)
            let data = await res.json()
            renderProducts(data)
        } else {

            let res = await fetch(`https://fakestoreapi.com/products/category/${categoryValue}`)
            let data = await res.json()
            renderProducts(data)
        }
    })
})


// Cart

// addToCart
function addToCart(productId) {
    const product = allProducts.find(p => p.id == productId)
    // console.log(product)

    if (product) {
        cart.push(product)
        // console.log(cart)
        updateUiCart() // cart DOM manipulation
        updateCartCount()



        // Toastify notification
        Toastify({
            text: "Item Added",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
}

// updateUiCart
function updateUiCart() {
    let cartContainer = document.querySelector("#cartContainer")
    cartContainer.innerHTML = '' //clear previous items
    cart.forEach((product) => {
        let div = document.createElement('div')
        div.innerHTML = `  <div class="text-gray-600 py-2 flex justify-between"> <span class = "text-sm truncate hover:text-clip">${product.title}</span> <span class="text-sm">RS:${product.price}</span>
        <button class = "remove-from-cart pl-1 text-sm" data-id="${product.id}" >❌</button>
        </div>`

        cartContainer.appendChild(div)
    })


    const removeFromCartButton = document.querySelectorAll(".remove-from-cart")
    removeFromCartButton.forEach(button => {
        button.addEventListener('click', () => {

            const productId = button.getAttribute('data-id')
            removeFromCart(productId)
            updateCartCount()
        })
    })


}

// removeFromCart

function removeFromCart(productId) {

    cart = cart.filter(item => item.id != productId)  // type cast error need to resolve
    console.log(cart)
    updateUiCart()
}

function updateCartCount() {
    const cartCount = document.querySelector('#cartCount')
    cartCount.textContent = cart.length > 0 ? cart.length : "0";
}

updateCartCount()