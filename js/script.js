document.addEventListener("DOMContentLoaded", () => {
    const homePicture = document.querySelector("#home-picture img");

    // Add the visible class after a short delay for the fade-in and zoom-in effect
    setTimeout(() => {
        homePicture.classList.add("visible");
    }, 500); // Delay in milliseconds
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutMeSection = document.querySelector("#about-me");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutMeSection.querySelector("h2").style.animation = "fadeIn 2s ease forwards";
                aboutMeSection.querySelectorAll("p").forEach((p, index) => {
                    p.style.animationDelay = `${index * 0.5}s`;
                    p.style.animation = "slideIn 1.5s ease forwards";
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutMeSection);
});

const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        skill.classList.toggle('highlighted');
    });
});