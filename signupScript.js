const signupForm = document.getElementById("signup-form");
const singupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupConfirmPassword = document.getElementById("signup-confirm-password");
const eye = document.querySelector("#eye");

// Error container
const nameError = document.getElementById("signupName");
const emailError = document.getElementById("signupEmail");
const passwordError = document.getElementById("signupPassword");
const confirmPasswordError = document.getElementById("signupConfirmPassword");

function validatePassword(password) {
    const minLength = 8;  // Minimum password length
    const uppercaseRegex = /[A-Z]/;  // Requires at least one uppercase letter
    const lowercaseRegex = /[a-z]/;  // Requires at least one lowercase letter
    const digitRegex = /\d/;         // Requires at least one digit
    const specialCharRegex = /[$@$!%*?&#]/;  // Requires at least one special character

    // Check the password against each criterion
    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    
    if (!uppercaseRegex.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    
    if (!lowercaseRegex.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    
    if (!digitRegex.test(password)) {
        return "Password must contain at least one digit.";
    }
    
    if (!specialCharRegex.test(password)) {
        return "Password must contain at least one special character ($, @, !, %, *, ?, #, etc.).";
    }

    // If all criteria are met, the password is valid
    return "valid";
} 

function validateName(name) {
    const uppercaseRegex = /[A-Z]+$/;
    const lowercaseRegex = /[a-z]+$/; 

    if (uppercaseRegex.test(name)) {
        return true;
    } 

    if (lowercaseRegex.test(name)) {
        return true;
    } 
    
    // otherwise return false
    return false;
}

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = singupName.value;
    const email = signupEmail.value;
    const password = signupPassword.value;
    const confirmPassword = signupConfirmPassword.value;

    // Add your signup validation logic here
    if (validateName(name) === false) {
        singupName.style.border = '1px solid red';
        const p = document.createElement("p");
        p.innerText = "Name Must Be Filled Correctly!"
        p.style.color = "red";
        p.style.fontSize = "0.8rem";
        nameError.appendChild(p);
    }

    if (email === "") {
        signupEmail.style.border = '1px solid red';
        const p = document.createElement("p");
        p.innerText = "Email Must Be Filled Correctly!"
        p.style.color = "red";
        p.style.fontSize = "0.8rem";
        emailError.appendChild(p);
    }

    if (validatePassword(password) !== "valid") {
        signupPassword.style.border = '1px solid red';
        const validationMessage = validatePassword(password);
        const p = document.createElement("p");
        p.innerText = validationMessage;
        p.style.color = "red";
        p.style.fontSize = "0.8rem";
        passwordError.appendChild(p);
    }

    else if (password !== confirmPassword) {
        signupConfirmPassword.style.border = '1px solid red';
        const p = document.createElement("p");
        p.innerText = "Confirm Password Must Be Equal To Password!";
        p.style.color = "red";
        p.style.fontSize = "0.8rem";
        confirmPasswordError.appendChild(p);
    }

    else {
        alert(name + " Signed Up Successfully!");
        window.location = `/login.html`;
    }
});


eye.addEventListener("click", function(){

    this.classList.toggle("fa-eye-slash");

    const type = signupPassword.getAttribute("type") === "password" ? "text" : "password";

    signupPassword.setAttribute("type", type);
    signupConfirmPassword.setAttribute("type", type);

  })