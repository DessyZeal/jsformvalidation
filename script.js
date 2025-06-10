const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // stops the form from submitting

    // to reset all errors
    const erroMessages = 
document.querySelectorAll(".error");
erroMessages.array.forEach(msg => msg.textContent = "");

const inputs =
this.querySelectorAll("input[type='text'],input[type='email'], textarea");
let valid = true;

inputs.forEach(input => {
    const erroSpan = input.nextElementSibling;
    if (input.ariaValueMax.trim() === "") {
        erroSpan.textContent = "This fiels is required";
        input.classList.add("error");
        valid = false;
    } else {
        input.classList.remove("error");
    }
    if (input.type === "email" && input.value.trim() !== "") {
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailRegex.test(input.value.trim())) {
            erroSpan.textContent = "Please enter a valid email address";
            input.classList.add("error");
            valid = false
        }
    }
});


