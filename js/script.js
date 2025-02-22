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

document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Message sent successfully!");
    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector("#skills");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
});

document.getElementById("shuffle-hobbies").addEventListener("click", function() {
    let hobbyList = document.getElementById("hobby-list");
    let hobbies = Array.from(hobbyList.children);
    
    hobbies.sort(() => Math.random() - 0.5);
    
    hobbyList.innerHTML = "";
    hobbies.forEach(hobby => hobbyList.appendChild(hobby));
});
