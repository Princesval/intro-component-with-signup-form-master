// First name
const fnInput = document.getElementById("first-name-input");
const fnSpan = document.getElementById("fname-span");
const fnImg = document.getElementById("fn-img");

// Last name
const lnInput = document.getElementById("last-name-input");
const lnSpan = document.getElementById("lname-span");
const lnImg = document.getElementById("ln-img");

// Email
const emailInput = document.getElementById("email-input");
const emailSpan = document.getElementById("email-span");
const emailImg = document.getElementById("email-img");

// Password
const passwordInput = document.getElementById("password-input");
const passwordSpan = document.getElementById("password-span");
const passwordImg = document.getElementById("password-img");

// Button
const button = document.getElementById("claim-button");

//Functions
function checkNameAndPassowrd(input, span, img){
    if (input.value === "") {
        span.style.display = 'block';
        input.style.border = '2px solid var(--Red)';
        img.style.display = 'block';
    } else {
        span.style.display = 'none';
        input.style.border = '1px solid var(--GrayishBlue)';
        img.style.display = 'none';
    }
}

function checkEmail(valueEmail) {
    if (valueEmail.indexOf('@') === -1 || valueEmail === "") {
        emailSpan.style.display = 'block';
        emailInput.style.border = '2px solid var(--Red)';
        emailImg.style.display = 'block';
    } else {
        emailSpan.style.display = 'none';
        emailInput.style.border = '1px solid var(--GrayishBlue)';
        emailImg.style.display = 'none';
    }
}

// Main
button.addEventListener('click', () => {
    checkNameAndPassowrd(fnInput, fnSpan, fnImg);
    checkNameAndPassowrd(lnInput, lnSpan, lnImg);
    checkEmail(emailInput.value)
    checkNameAndPassowrd(passwordInput, passwordSpan, passwordImg);
})