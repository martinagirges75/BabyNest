// ======================================
// BabyNest Slider
// ======================================

const heroImages = [

    "images/hero.jpg",


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

if (heroImage) {

    heroImage.style.transition = "0.5s";

    setInterval(changeHeroImage, 4000);

}
