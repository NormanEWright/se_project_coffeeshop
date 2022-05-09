// Add placeholder text to number input field
document.getElementById("guests").placeholder = "1-8";

// Prevent default form submission
document.querySelector(".form__button").addEventListener("click", function (event) {
  event.preventDefault()
});