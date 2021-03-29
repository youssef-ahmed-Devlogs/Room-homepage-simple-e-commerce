// ************************************ Navbar hamburger Button ************************************
let hamburgerBtn = document.querySelector(".hamburger-btn");
let hamburgerBtnImg = document.querySelector(".hamburger-btn img");
let navLinks = document.querySelector(".nav-links");
let isOpen = false;

hamburgerToggle = () => {
    if(!isOpen) {
        navLinks.style.display = "flex";
        hamburgerBtnImg.src = "images/icon-close.svg";
    } else {
        navLinks.style.display = "none";
        hamburgerBtnImg.src = "images/icon-hamburger.svg";
    }
    isOpen = !isOpen;
}

hamburgerBtn.addEventListener("click", hamburgerToggle);

// ************************************ Slider Images ************************************
let sliderImageContainer = document.querySelector(".slider-image-container");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let move = 0;
let oneImageWidth = sliderImageContainer.children[0].clientWidth;
let slideLength = -(sliderImageContainer.children.length * oneImageWidth - oneImageWidth);
// ************************************ Slider Description ************************************
let sliderDescTitle = document.querySelector(".slider-desc-title");
let sliderDescParagraph = document.querySelector(".slider-desc-p");
let data = [
    {
        title: "Discover innovative ways to decorate",
        desc:`We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. Create a room in your 
              own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        title: "We are available all across the globe",
        desc:`With stores all over the world, it's easy for you to find furniture for your home or place of business. 
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
              store locator. Any questions? Don't hesitate to contact us today.`},
    {
        title: "Manufactured with the best materials",
        desc:`Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
              to ensure that every product is made as perfect and as consistent as possible. With three decades of 
              experience in this industry, we understand what customers want for their home and office.`
    }
];
let index = 0;

nextSlide = () => { 
    let isEndSlide = move > slideLength ? true : false;
    if(isEndSlide) {
        move += -(sliderImageContainer.children[0].clientWidth);
    }
    sliderImageContainer.style.transform = `translateX(${move}px)`;

    if(index < data.length - 1) {
        index++;
        sliderDescTitle.textContent = data[index].title;
        sliderDescParagraph.textContent = data[index].desc;
    }
}

prevSlide = () => { 
    let isFirstSlide = move == 0 ? false : true;
    if(isFirstSlide) {
        move += (sliderImageContainer.children[0].clientWidth);
    }
    sliderImageContainer.style.transform = `translateX(${move}px)`;


    if(index > 0) {
        index--;
        sliderDescTitle.textContent = data[index].title;
        sliderDescParagraph.textContent = data[index].desc;
    }
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
