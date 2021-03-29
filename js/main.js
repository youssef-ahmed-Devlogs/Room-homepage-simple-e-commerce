// ************************************ Navbar hamburger Button ************************************
let hamburgerBtn = document.querySelector(".hamburger-btn");
let hamburgerBtnImg = document.querySelector(".hamburger-btn img");
let navLinks = document.querySelector(".nav-links");
let isOpen = false;

hamburgerToggle = () => {
    if(!isOpen) {
        navLinks.style.display = "flex";
        navLinks.style.animation = "pop .3s ease-in-out";
        hamburgerBtnImg.src = "images/icon-close.svg";
    } else {
        navLinks.style.display = "none";
        hamburgerBtnImg.src = "images/icon-hamburger.svg";
    }
    isOpen = !isOpen;
}

hamburgerBtn.addEventListener("click", hamburgerToggle);

// ************************************ Slider ************************************
let sliderImage = document.querySelector(".slider-image-container img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let sliderDescTitle = document.querySelector(".slider-desc-title");
let sliderDescParagraph = document.querySelector(".slider-desc-p");
let data = [
    {
        title: "Discover innovative ways to decorate",
        desc:`We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. Create a room in your 
              own style with our collection and make your property a reflection of you and what you love.`,
        img: "images/desktop-image-hero-1.jpg"
    },
    {
        title: "We are available all across the globe",
        desc:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
              store locator. Any questions? Don't hesitate to contact us today.`,
        img: "images/desktop-image-hero-2.jpg"
    },    
    {
        title: "Manufactured with the best materials",
        desc:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
              to ensure that every product is made as perfect and as consistent as possible. With three decades of 
              experience in this industry, we understand what customers want for their home and office.`,
        img: "images/desktop-image-hero-3.jpg"
    }
];
let index = 0;

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function nextSlide() { 
    if(index < data.length - 1) {
        index++;
        render(data[index].title, data[index].desc, data[index].img);
    }
}

function prevSlide() { 
    if(index > 0) {
        index--;
        render(data[index].title, data[index].desc, data[index].img);
    }
}

function render(title, desc, img) {
    sliderDescTitle.textContent = title;
    sliderDescParagraph.textContent = desc;
    sliderImage.style.animation = "fadeIn .3s ease-in-out";
    sliderImage.src = img;
    setTimeout(() => {
        sliderImage.style.animation = "none";
    }, 200)
}