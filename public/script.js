/* ==========================================
   NID.dev Portfolio
   script.js
========================================== */

// ===============================
// Terminal Typing Animation
// ===============================

const terminal = document.getElementById("terminal");

if (terminal) {
    const commands = [
`$ whoami

NWACHUKWU IFEANYI DIVINE

$ role

Cloud & DevOps Engineer`,

`$ docker ps

CONTAINER ID     IMAGE

mongo-demo
mongodb
nginx`,

`$ aws sts get-caller-identity

Account: ********7402

Region: eu-north-1`,

`$ github actions

✔ Build Successful

✔ Docker Image Created

✔ Pushed to Amazon ECR

✔ Deployed to EC2`,

`$ next

Terraform
Kubernetes
Monitoring`
    ];

    let commandIndex = 0;
    let characterIndex = 0;

    function typeAnimation() {

        const currentCommand = commands[commandIndex];

        terminal.textContent =
            currentCommand.substring(0, characterIndex) + "█";

        characterIndex++;

        if (characterIndex <= currentCommand.length) {

            setTimeout(typeAnimation, 25);

        } else {

            setTimeout(() => {

                commandIndex++;

                if (commandIndex >= commands.length) {
                    commandIndex = 0;
                }

                characterIndex = 0;

                typeAnimation();

            }, 2200);

        }

    }

    typeAnimation();
}

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

const sections = document.querySelectorAll("section");

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Fade On Page Load
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ===============================
// Button Hover Effect
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// ===============================
// Console Welcome Message
// ===============================

console.log(
    "%cWelcome to NID.dev Portfolio",
    "color:#38bdf8;font-size:18px;font-weight:bold;"
);

console.log(
    "%cDesigned by NWACHUKWU IFEANYI DIVINE",
    "color:white;font-size:14px;"
);

console.log(
    "%cCloud & DevOps Engineer",
    "color:#38bdf8;font-size:14px;"
);
