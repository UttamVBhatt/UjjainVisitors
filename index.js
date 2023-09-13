'use strict';

/////////////////  NAV - BAR ///////////////////
var btnDiv = document.querySelector('.divbtn');
var menuUl = document.querySelector('.menu');
var hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    menuUl.classList.toggle('active');
    btnDiv.classList.toggle('active');
    hamburger.classList.toggle('newHamburger');
});




let crossBtn = document.querySelector(".cross");
let loginContainer = document.querySelector(".login-container");
let loginDiv = document.querySelector(".login");
let loginOverlay = document.querySelector(".login-overlay");
let signUpButton = document.querySelector(".sign-up");
let logInButton = document.querySelector(".log-in");
let link = document.querySelector(".signup-link");
let logIn = document.querySelector(".login-span")
let inputPasswordDiv = document.querySelector(".input-password")
let signUpParagraph = document.querySelector(".signUp");
let buttonDiv = document.querySelector(".login-button");
let inputEmailDiv = document.querySelector(".input-email");
let input = document.querySelectorAll(".input");
let label = document.querySelectorAll(".input-label");


////////////////// login Singup ///////////////////
function loginHidden() {
    loginContainer.style.display = "none";
    loginDiv.style.display = "none";
    loginOverlay.style.display = "none";
}

crossBtn.addEventListener("click", loginHidden)


////////////////// focus on input /////////////////

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("focus", (e) => {
        e.preventDefault()
        label[i].classList.add("transform");
        input[i].classList.add("border")
    })
}

///////////////// change content on signup link click //////////////////

link.addEventListener("click", (e) => {
    e.preventDefault();
    signUpContentChanger();
})

function signUpContentChanger() {
    logIn.textContent = "SignUp";
    inputPasswordDiv.firstElementChild.textContent = "Create Password";
    signUpParagraph.style.display = 'none'
    buttonDiv.firstElementChild.textContent = "Sign Up"
}

/////////////////// CLICKING ON SIGNUP BUTTON //////////////////////

signUpButton.addEventListener("click", () => {
    signUpDisplaychanger();
    signUpContentChanger();
})

logInButton.addEventListener("click", () => {
    signUpDisplaychanger();
})

function signUpDisplaychanger() {
    loginContainer.classList.add('anime');
    loginOverlay.classList.add('anime');
    logIn.classList.add("anime");
    loginContainer.style.display = "flex";
    loginOverlay.style.display = "block";
}

///////////////// BUTTON DIV ////////////////////

buttonDiv.firstElementChild.addEventListener("click", () => {
    if (
        inputPasswordDiv.lastElementChild.value != '' &&
        inputEmailDiv.lastElementChild.value != '' &&
        buttonDiv.firstElementChild.textContent == "Log In") {
        alert("Logged In Successfully 👍");
        inputPasswordDiv.lastElementChild.value = '';
        inputEmailDiv.lastElementChild.value = '';
    } else if (inputPasswordDiv.lastElementChild.value != '' &&
        inputEmailDiv.lastElementChild.value != '' &&
        buttonDiv.firstElementChild.textContent == "Sign Up") {
        alert("Sign Up Successfully 👍");
        inputPasswordDiv.lastElementChild.value = '';
        inputEmailDiv.lastElementChild.value = '';
    } else {
        alert("Fill up the field properly and try again")
    }

})

////////////// GIF //////////////

let gifDiv = document.querySelector(".gif");
let gifImage = document.querySelector(".gif img");

window.addEventListener("DOMContentLoaded", () => {
    gifDiv.style.display = "none";
    gifImage.style.display = "none";
})