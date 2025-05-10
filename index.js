// Step 1: Select the theme button
let themeToggle = document.querySelector(".switch input");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    const instaLogo = document.getElementById("instagram-logo");

    if (document.body.classList.contains("dark-mode")) {
        instaLogo.src = "img/ig-logo-white.png";
    } else {
        instaLogo.src = "img/ig-logo.png";
    };
};
themeToggle.addEventListener("change", toggleDarkMode);


let submitForm = document.querySelector("#rsvp-button")

const addParticipant = (event) => {
    event.preventDefault();

    const form = document.getElementById("rsvp-form");
    let title = form.elements["title"].value;
    let author = form.elements["author"].value;

    if (title && author) {
        const listItem = document.createElement("li");
        listItem.textContent = `${title} by ${author}`;

        const list = document.querySelector(".rsvp-participants ul");
        list.appendChild(listItem);

        form.reset();
    } else {
        alert("Please fill out both fields before submitting.");
    }
};

const validateForm = () => {
    let containsErrors = false;
    var rsvpInputs = document.getElementById("rsvp-form").elements;
    
    for (let i = 0; i < rsvpInputs.length; i++) {
        const input = rsvpInputs[i];
        if (input.value.length < 2) {
            containsErrors = true;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        };
    };

    if (containsErrors == false) {
        addParticipant(event);
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        };
    };
};
  
submitForm.addEventListener("click", validateForm);


const reveal = () => {
    const revealableContainers = document.querySelectorAll(".revealable");

    revealableContainers.forEach((container, index) => {
        const windowHeight = window.innerHeight;
        const topOfRevealableContainer = container.getBoundingClientRect().top;
        const revealDistance = parseInt(getComputedStyle(container).getPropertyValue('--reveal-distance'), 10);

        if (topOfRevealableContainer < windowHeight - revealDistance) {
            container.classList.add("active");
            container.style.transitionDelay = `${index * 0.2}s`; // Stagger effect
        } else {
            container.classList.remove("active");
            container.style.transitionDelay = "0s";
        }
    });
};

window.addEventListener("scroll", reveal);

let reduceBtn = document.getElementById("reduce-motion");

const reduceMotion = () => {
    let btnCheck = document.body.classList;
    if (btnCheck.contains("reduce-motion")) {
        btnCheck.remove("reduce-motion");
        reduceBtn.textContent = "Reduce Motion";
    } else {
        btnCheck.add("reduce-motion");
        reduceBtn.textContent = "Enable Motion";
    }
}

reduceBtn.addEventListener("click", reduceMotion);