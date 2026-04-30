//Typing Animation
let words = [
    { text: "Frontend Developer", class: "red-glow" },
    { text: "Freelancer", class: "green-glow" }
];

let wordIndex = 0;
let i = 0;
let isDeleting = false;

const element = document.querySelector(".typing");

function typingAnimation() {
    let current = words[wordIndex];

    element.className = "typing " + current.class;

    if (!isDeleting) {
        element.innerHTML = current.text.slice(0, i++);
        if (i > current.text.length) {
            isDeleting = true;
            setTimeout(typingAnimation, 1000);
            return;
        }
    } else {
        element.innerHTML = current.text.slice(0, i--);
        if (i === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typingAnimation, isDeleting ? 80 : 120);
}

typingAnimation();

//Particles
const container = document.querySelector(".background");

for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size = Math.random() > 0.7 ? 3 : 2;
    const color = Math.random() > 0.6 ? '#00c8ff' : '#7722ee';

    p.style.left = `${Math.random() * 100}vw`;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.background = color;
    p.style.boxShadow = `0 0 6px ${color}`;
    p.style.animationDuration = `${8 + Math.random() * 10}s`;
    p.style.animationDelay = `${Math.random() * 3}s`;

    container.appendChild(p);
}
//Navbar Effect
const links = document.querySelectorAll(".nav-item");
const navbar = document.querySelector(".navbar");

links.forEach(link => {
   link.addEventListener("mouseenter", () => {
     navbar.style.background = "rgb(8, 15, 58)";
     navbar.style.padding = "10px 50px";
   });
   link.addEventListener("mouseleave", () => {
    navbar.style.background = "";
    navbar.style.padding = "";
   });
});
const overlay = document.querySelector(".scroll-overlay");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgb(8, 15, 58)";
        navbar.style.padding = "10px 50px";
    } else {
        navbar.style.background = "";
        navbar.style.padding = "";
    }
    const scrollY = window.scrollY;
    const hero = document.querySelector(".hero");
    const opacity = Math.min(scrollY / 500, 0.8);
    hero.style.filter = `brightness(${1 - opacity})`;

});
document.querySelectorAll(".project-image").forEach(function(img) {
    img.addEventListener("click", function() {
        window.open(this.dataset.link, "_blank");
    });
});