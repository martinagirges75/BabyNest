// ======================================
// BabyNest Slider
// ======================================

// Hero Images

const heroImages = [

    "images/hero.jpg",

    "images/hero2.jpg",

    "images/hero3.jpg",

    "images/hero4.jpg"

];

const heroImage = document.querySelector(".hero-image img");

let currentSlide = 0;

function changeHeroImage() {

    currentSlide++;

    if (currentSlide >= heroImages.length) {

        currentSlide = 0;

    }

    heroImage.style.opacity = "0";

    setTimeout(() => {

        heroImage.src = heroImages[currentSlide];

        heroImage.style.opacity = "1";

    }, 400);

}

// تغيير الصورة كل 4 ثواني

setInterval(changeHeroImage, 4000);

// تأثير انتقال ناعم

heroImage.style.transition = "0.5s";