// ===================================
// BabyNest Main JavaScript
// ===================================


// ================================
// Loading Screen
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


// ================================
// Mobile Menu
// ================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ================================
// Close Menu After Clicking Link
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// Scroll Animation
// ================================

const animatedElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {

    animatedElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================================
// Sticky Header Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    }

});


// ================================
// Newsletter Form
// ================================

const newsletterForm = document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const email = newsletterForm.querySelector("input").value.trim();

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    alert("Thank you for subscribing!");

    newsletterForm.reset();

});


// ================================
// Contact Form
// ================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const inputs = contactForm.querySelectorAll("input, textarea");

    let isValid = true;

    inputs.forEach(input => {

        if (input.value.trim() === "") {

            isValid = false;

        }

    });

    if (!isValid) {

        alert("Please fill in all fields.");

        return;

    }

    alert("Your message has been sent successfully!");

    contactForm.reset();

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ================================
// Console Message
// ================================

console.log("🚀 BabyNest Website Loaded Successfully");
// ===============================
// Open Cart
// ===============================

const cartIcon = document.querySelector(".fa-cart-shopping");

const cartSidebar = document.getElementById("cartSidebar");

const closeCart = document.getElementById("closeCart");

cartIcon.addEventListener("click", () => {

    cartSidebar.classList.add("active");

});

closeCart.addEventListener("click", () => {

    cartSidebar.classList.remove("active");

});
const clearCart = document.getElementById("clearCart");

clearCart.addEventListener("click", () => {

    cart = [];

    updateCart();

});