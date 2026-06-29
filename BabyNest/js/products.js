// ===============================
// BabyNest Products
// ===============================

const products = [

    {
        id: 1,
        name: "Baby Stroller",
        price: 180,
        image: "images/baby1.jpg",
        description: "Comfortable stroller for everyday walks."
    },

    {
        id: 2,
        name: "Baby Bottle",
        price: 25,
        image: "images/baby2.jpg",
        description: "BPA-free feeding bottle for newborns."
    },

    {
        id: 3,
        name: "Baby Clothes",
        price: 40,
        image: "images/baby3.jpg",
        description: "Soft cotton clothes for maximum comfort."
    },

    {
        id: 4,
        name: "Baby Bed",
        price: 220,
        image: "images/baby4.jpg",
        description: "Safe and cozy sleeping bed."
    },

    {
        id: 5,
        name: "Baby Toys",
        price: 35,
        image: "images/baby5.jpg",
        description: "Educational toys for babies."
    },

    {
        id: 6,
        name: "Baby Chair",
        price: 90,
        image: "images/baby6.jpg",
        description: "Comfortable feeding chair."
    },

    {
        id: 7,
        name: "Baby Blanket",
        price: 30,
        image: "images/baby7.jpg",
        description: "Warm and soft blanket."
    },

    {
        id: 8,
        name: "Baby Shoes",
        price: 28,
        image: "images/baby8.jpg",
        description: "Cute and comfortable shoes."
    }

];
// ===============================
// Shopping Cart
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===============================
// Display Products
// ===============================

const productsGrid = document.getElementById("products-grid");

function displayProducts() {

    productsGrid.innerHTML = "";

    products.forEach(product => {

        productsGrid.innerHTML += `

        <div class="product-card fade-up">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">

                    $${product.price}

                </div>

                <div class="product-buttons">

                    <button class="add-cart"
        onclick="addToCart(${product.id})">

    Add To Cart

</button>

                    <div class="wishlist">

                        <i class="fa-regular fa-heart"></i>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

}

displayProducts();

// ===============================
// Wishlist
// ===============================

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("fa-heart")) {

        e.target.classList.remove("fa-regular");

        e.target.classList.add("fa-solid");

        e.target.style.color = "#ff4d6d";

    }

});
// ===============================
// Add Product To Cart
// ===============================

function addToCart(id) {

    const product = products.find(item => item.id === id);

    cart.push(product);

    updateCart();

}


// ===============================
// Update Cart
// ===============================

function updateCart() {

    const cartItems = document.getElementById("cartItems");

    const cartCount = document.getElementById("cart-count");

    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>$${item.price}</p>

            </div>

            <i class="fa-solid fa-trash remove-item"
               onclick="removeItem(${index})"></i>

        </div>

        `;

    });

    if (cart.length === 0) {

        cartItems.innerHTML =

            `<p class="empty-cart">

            Your cart is empty.

        </p>`;

    }

    cartCount.innerText = cart.length;

    cartTotal.innerText = "$" + total;
    localStorage.setItem("cart", JSON.stringify(cart));
}


// ===============================
// Remove Item
// ===============================

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}
// ===============================
// Load Cart On Page Load
// ===============================

updateCart();