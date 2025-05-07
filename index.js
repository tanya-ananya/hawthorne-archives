// Step 1: Select the theme button
let themeToggle = document.querySelector(".switch input");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
themeToggle.addEventListener("change", toggleDarkMode);



// Step 1: Add your query for the submit RSVP button here
const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/