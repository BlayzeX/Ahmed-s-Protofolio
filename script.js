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

document.querySelectorAll(".project-image").forEach(function(img) {
    img.addEventListener("click", function() {
        window.open(this.dataset.link, "_blank");
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const showMoreBtn = document.getElementById("showMore");
  const hiddenProjects = document.querySelectorAll(".hidden-project");

  let projectsVisible = false;

  if (!showMoreBtn) return;

  showMoreBtn.addEventListener("click", () => {
    projectsVisible = !projectsVisible;

    hiddenProjects.forEach(project => {
      project.style.display = projectsVisible ? "flex" : "none";
    });

    showMoreBtn.textContent = projectsVisible ? "Show Less" : "Show More";
  });
});
