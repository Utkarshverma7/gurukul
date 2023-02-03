// Get references to the form and input fields
const loginForm = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

// Define a set of valid credentials
const validCredentials = {
  username: "admin",
  password: "password"
};

// Listen for the form's submit event
loginForm.addEventListener("submit", event => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the entered credentials match the valid credentials
  if (username === validCredentials.username && password === validCredentials.password) {
    // If the credentials are valid, redirect the user to the dashboard
    window.location.href = "course.html";
  } else {
    // If the credentials are invalid, show an error message
    alert("Invalid username or password. Please try again.");
  }
});
