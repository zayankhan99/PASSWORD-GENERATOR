var inputSlider = document.getElementById("inputSlider");
var sliderValue = document.getElementById("sliderValue");
var passBox = document.getElementById("passBox");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var genBtn = document.getElementById("genBtn");
var copyIcon = document.getElementById("copyIcon");


// Showing input slider value 
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allNumbers = "0123456789";
var allSymbols = "~!@#$%^&*";

// Function to generate Password
function generatePassword() {
    var genPassword = "";
    var allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";


    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }


    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});