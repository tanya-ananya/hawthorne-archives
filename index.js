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
    event.preventDefault(); // Prevent form submission from refreshing the page

    const form = document.getElementById("rsvp-form");
    let title = form.elements["title"].value;
    let author = form.elements["author"].value;

    if (title && author) {
        const listItem = document.createElement("li");
        listItem.textContent = `${title} by ${author}`;

        const list = document.querySelector(".rsvp-participants ul");
        list.appendChild(listItem);

        // Clear input fields after adding the participant
        form.reset();
    } else {
        alert("Please fill out both fields before submitting.");
    }
};

submitForm.addEventListener("click", addParticipant);

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/