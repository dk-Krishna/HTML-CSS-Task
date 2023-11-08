const loginForm = document.getElementById("login-form");
const eye = document.getElementById("eye");

const loginPassword = document.getElementById("login-password");
const passwordError = document.getElementById("loginPassword");
const loginEmail = document.getElementById("login-email");
const emailError = document.getElementById("loginEmail");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value; // no needed for security purpose

    // login validation logic here
    if (email === "") {
        loginEmail.style.border = '1px solid red';
        const p = document.createElement("p");
        p.innerText = "Email Must Be Filled Correctly!"
        p.style.color = "red";
        p.style.fontSize = "0.8rem";
        emailError.appendChild(p);
    }

    if (password === "") {
        loginPassword.style.border = '1px solid red';
        const p = document.createElement("p");
        p.innerText = "Password Must Be Filled Correctly!"
        p.style.color = "red";
        p.style.fontSize = "0.8rem";
        passwordError.appendChild(p);
    }

    else {
        alert(email + "Logged In!");
        window.location.href = `/home.html?email=${encodeURIComponent(email)}`;
    }

});

eye.addEventListener("click", function() {

    this.classList.toggle("fa-eye-slash");

    const type = loginPassword.getAttribute("type") === "password" ? "text" : "password";
    loginPassword.setAttribute("type", type);

});