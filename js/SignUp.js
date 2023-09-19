
    // The following code for sign up page///////

    // document.querySelectorAll(".form__input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Username must be at least 10 characters in length");
    //         }
    //     });

    //     inputElement.addEventListener("input", e => {
    //         clearInputError(inputElement);
    //     });
    // });


    document.addEventListener("DOMContentLoaded", function () {
        const signupForm = document.getElementById("signup");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("set-password");
        const emailInput = document.getElementById("email");
        const firstNameInput = document.getElementById("firstname");
        const lastNameInput = document.getElementById("lastname");

       
        
        
        // Function to display an error message
        function showError(inputElement, message) {
            const errorElement = inputElement.nextElementSibling; // Assuming error message elements are placed right after the input fields
            errorElement.textContent = message;
        }
        
        // Function to clear the error message
        function clearError(inputElement) {
            const errorElement = inputElement.nextElementSibling;
            errorElement.textContent = "";
        }
        
        // Function to check if the input value is empty
        function isNotEmpty(value) {
            return value.trim() !== "";
        }
        
        // Function to check if the email is valid (simple check)
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        
        // Function to check if passwords match
        function doPasswordsMatch(password, confirmPassword) {
            return password === confirmPassword;
        }
        
        // Function to handle form submission
        function handleFormSubmit(event) {
            event.preventDefault();
            
            // Validation checks
            const firstNameValue = firstNameInput.value;
            const lastNameValue = lastNameInput.value;
            const emailValue = emailInput.value;
            const passwordValue = passwordInput.value;
            const confirmPasswordValue = confirmPasswordInput.value;
            
            if (!isNotEmpty(firstNameValue)) {
                showError(firstNameInput, "Введите имя");
            } else {
                clearError(firstNameInput);
            }
            
            if (!isNotEmpty(lastNameValue)) {
                showError(lastNameInput, "Введите фамилию");
            } else {
                clearError(lastNameInput);
            }
            
            if (!isNotEmpty(emailValue) || !isValidEmail(emailValue)) {
                showError(emailInput, "Введите действительный адрес электронной почты");
            } else {
                clearError(emailInput);
            }
            
            if (!isNotEmpty(passwordValue)) {
                showError(passwordInput, "Введите пароль");
            } else {
                clearError(passwordInput);
            }
            
            if (!doPasswordsMatch(passwordValue, confirmPasswordValue)) {
                showError(confirmPasswordInput, "Пароли не совпадают");
            } else {
                clearError(confirmPasswordInput);
            }
            
            // If there are no errors, you can proceed with form submission
            if (
                isNotEmpty(firstNameValue) &&
                isNotEmpty(lastNameValue) &&
                isNotEmpty(emailValue) &&
                isValidEmail(emailValue) &&
                isNotEmpty(passwordValue) &&
                doPasswordsMatch(passwordValue, confirmPasswordValue)
            ) {
                // You can add AJAX/Fetch logic here to submit the form to the server
                // After a successful submission, you can redirect the user or perform other actions
                window.location.href = "/account_page.html";
            }
        }
        
        // Add an event listener for form submission
        signupForm.addEventListener("submit", handleFormSubmit);
    });