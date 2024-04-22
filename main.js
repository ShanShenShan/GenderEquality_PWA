const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

menuBtn.addEventListener("click", (e) => {
    // nav-links will have class .open when a user click the menu-btn icon
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    // when it's open, the menu-btn will be close icon, when its not it will be default icon
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line": "ri-menu-4-line")
})

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-4-line");
})

const scrollRevealOption = {
    distance: "75px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".nav-header .nav-logo", {
    ...scrollRevealOption,
    delay: 500,
    origin: "right",
});

ScrollReveal().reveal("nav .nav-links li", {
    ...scrollRevealOption,
    delay: 750,
    origin: "right",
    interval: "200",
});

ScrollReveal().reveal(".header-container .header-image img", {
    ...scrollRevealOption,
    delay: 1000,
    origin: "top",
    distance: "100px",
});

ScrollReveal().reveal(".header-content .section-header", {
    ...scrollRevealOption,
    delay: 1250,
    origin: "left",
    distance: "100px",
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1350,
    origin: "left",
    distance: "100px",
});

ScrollReveal().reveal(".header-content .header-btn", {
    ...scrollRevealOption,
    delay: 1450,
    origin: "left",
    distance: "100px",
});

ScrollReveal().reveal(".about-container .about-image img", {
    ...scrollRevealOption,
    delay: 1550,
    origin: "top",
    distance: "100px",
});

ScrollReveal().reveal(".about-container .about-content .section-header ", {
    ...scrollRevealOption,
    delay: 1650,
    origin: "right",
    distance: "100px",
});

ScrollReveal().reveal(".about-container .section-description", {
    ...scrollRevealOption,
    delay: 1750,
    origin: "right",
    distance: "100px",
});

ScrollReveal().reveal(".last-container .section-header", {
    ...scrollRevealOption,
    delay: 1850,
    origin: "top",
    distance: "100px",
});

ScrollReveal().reveal(".last-container .blue-text-last", {
    ...scrollRevealOption,
    delay: 1950,
    origin: "left",
    distance: "100px",
});

ScrollReveal().reveal(".last-container .red-text-last", {
    ...scrollRevealOption,
    delay: 2050,
    origin: "right",
    distance: "100px",
});

ScrollReveal().reveal(".container-images .image-and-text", {
    ...scrollRevealOption,
    delay: 2150,
    origin: "top",
    distance: "100px",
    interval: "200",
});

ScrollReveal().reveal(".footer .footer-col ", {
    ...scrollRevealOption,
    delay: 2250,
    origin: "top",
    distance: "100px",
    interval: "200",
});

ScrollReveal().reveal(".footer .footer-bar", {
    ...scrollRevealOption,
    delay: 2300,
    origin: "bottom",
    distance: "100px",
});

// Scroll

//scoll up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, the scroll up will appear 
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

// Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`,

    }, {duration: 500, fill: "forwards"})
})





