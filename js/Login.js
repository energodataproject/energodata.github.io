function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
   

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Неверное имя пользователя/пароль");
    });

}) 


// -----------------------------Show Password Icon-------------------------------------//

const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".form__input");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});


// -----------------------------Remember Password and Email------------------------------//


document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const rememberCheckbox = document.getElementById("remember");
  
    // Check if there is saved data in localStorage
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
  
    if (savedEmail && savedPassword) {
      // Populate the email and password fields if data is found in localStorage
      emailInput.value = savedEmail;
      passwordInput.value = savedPassword;
    }
  
    // Add an event listener to the form submission
    document.getElementById("login").addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get the values entered by the user
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;
  
      // Check if the "Remember Me" checkbox is checked
      if (rememberCheckbox.checked) {
        // If checked, save the email and password to localStorage
        localStorage.setItem("email", emailValue);
        localStorage.setItem("password", passwordValue);
      } else {
        // If not checked, remove any saved data from localStorage
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }


      // Redirect to the desired page after successful login
      window.location.href = "/account_page.html";

      // Fetch API from the server. here we directly get email and name from server data
      // ...
    });
  });
  

