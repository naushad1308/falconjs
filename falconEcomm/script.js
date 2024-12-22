// Fetch products
// product render
// searchFilter
// category filters
// tab filters
// cart
// Load more button API cal
// Light and Dark mode
// Multistep progress bar
// Scroll Indicator
// Pagination


let productApi = "https://fakestoreapi.com/products"
// Fetch Products

let fetchProducts = async () => {
    try {
        let response = await fetch(productApi)
        let data = await response.json()
        // console.log(data)
        renderProducts(data)
        return data
    } catch (err) {

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

                        <button class="mt-2 w-full bg-yellow-600 text-black px-4 py-2 rounded add-to-cart"
                            data-title="Product Title 1" data-price="$19.99">Add to Cart</button>
                    </div>
                        </div>`

        productContainer.appendChild(productCard)
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
    console.log(searchValue)

    let res = await fetch(`https://fakestoreapi.com/products`)
    let data = await res.json()
    let filteredProducts = data.filter((product) => {
        return product.title.toLowerCase().includes(searchValue)
    })
    renderProducts(filteredProducts)
}
searchInput.addEventListener('input', searchInputDebounce(searchInputFunction, 1000))


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

