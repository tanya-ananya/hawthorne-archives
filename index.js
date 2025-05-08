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

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {
    let containsErrors = false;
    var rsvpInputs = document.getElementById("rsvp-form").elements;
    
    // TODO: Loop through all inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
        const input = rsvpInputs[i];
        if (input.value.length < 2) {
            containsErrors = true;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        };
    };
  
    // TODO: Inside loop, validate the value of each input

    // TODO: If no errors, call addParticipant() and clear fields
    if (containsErrors == false) {
        addParticipant(event);
        for (let i = 0; i < rsvpInputs.length; i++) {
            rsvpInputs[i].value = "";
        };
    };
};
  
// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitForm.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/