// Fetch products
// product render
// searchFilter
// category filters
// tab filters
// cart


let productApi = "https://fakestoreapi.com/products"
// Fetch Products

let fetchProducts = async () => {
    try {
        let response = await fetch(productApi)
        let data = await response.json()
        console.log(data)
        renderProducts(data)
        return data
    } catch (err) {

    }
}
fetchProducts()


let renderProducts = (products) => {
    console.log("hello")
    let productContainer = document.querySelector("#productContainer")
    productContainer.innerHTML = ''
    products.forEach((product) => {
        let productCard = document.createElement("div")
        productCard.innerHTML = ` <div class="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                        <img src="${product.image}" alt="Product Image"
                            class="w-full h-32 object-cover mb-2">
                        <h3 class="font-semibold py-1">${product.title}</h3>
                        <div class="flex justify-between py-1">
                            <span class="text-gray-600">${product.price}</span>
                            <span class="text-gray-600">Rating:${product.rating.rate}</span>
                        </div>

                        <button class="mt-2 w-full bg-yellow-600 text-black px-4 py-2 rounded add-to-cart"
                            data-title="Product Title 1" data-price="$19.99">Add to Cart</button>
                    </div>`

        productContainer.appendChild(productCard)
    })
}