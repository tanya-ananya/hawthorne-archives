let themeToggle = document.querySelector(".switch input");

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


let submitForm = document.querySelector("#forum-button")

const addParticipant = (event, book_info) => {
    event.preventDefault();

    const form = document.getElementById("forum-form");

    if (book_info.name && book_info.title) {
        const listItem = document.createElement("li");
        listItem.textContent = `${book_info.name}'s favorite is ${book_info.title}`;

        const list = document.querySelector(".forum-participants ul");
        list.appendChild(listItem);

        form.reset();
    } else {
        alert("Please fill out both fields before submitting.");
    }
};

const validateForm = (event) => {
    let containsErrors = false;
    var forumInputs = document.getElementById("forum-form").elements;

    const book_info = {
        name: forumInputs["name"].value,
        title: forumInputs["title"].value
    };
    
    for (let i = 0; i < forumInputs.length; i++) {
        const input = forumInputs[i];
        if (input.value.length < 2) {
            containsErrors = true;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        };
    };

    if (containsErrors == false) {
        addParticipant(event, book_info);
        toggleModal(book_info);
        for (let i = 0; i < forumInputs.length; i++) {
            forumInputs[i].value = "";
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
const modal = document.getElementById("success-modal");

const toggleModal = (book_info) => {
    const modalContent = document.getElementById("modal-text");
    modal.style.display = "flex";

    modalContent.innerHTML = `
        <h3><strong>User name:</strong> ${book_info.name}</h3>
        <h3><strong>Title:</strong> ${book_info.title}</h3>
        <h3>That's a good choice! Your favorite book has been recorded ✨</h3>
    `;

    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
    }, 500000);
    let intervalId = setInterval(animateImage, 500);
};

let rotateFactor = 0;
modalImage = document.getElementById("modal-image");

const animateImage = () => {
    rotateFactor = rotateFactor === 0 ? -10 : 0;
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

let close = document.getElementById("modal-close");
const closeModal = () => {
    modal.style.display = "none";
};

close.addEventListener("click", closeModal);