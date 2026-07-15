// ===============================
// Loader
// ===============================

window.addEventListener("load", function() {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {

        navLinks.classList.toggle("show");

    });

}

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Cart Sidebar
// ===============================

const cartIcon = document.querySelector(".fa-cart-shopping");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

if (cartIcon && cartSidebar && closeCart) {

    cartIcon.addEventListener("click", function() {

        cartSidebar.classList.add("active");

    });

    closeCart.addEventListener("click", function() {

        cartSidebar.classList.remove("active");

    });

}

// ===============================
// Clear Cart
// ===============================

const clearCart = document.getElementById("clearCart");

if (clearCart) {

    clearCart.addEventListener("click", function() {

        cart = [];

        updateCart();

    });

}
