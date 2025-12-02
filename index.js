const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let firstPassword = document.getElementById("first-password");
let secondPassword = document.getElementById("second-password");

let firstCopyButton = document.getElementById("copy-btn-1");
let secondCopyButton = document.getElementById("copy-btn-2");

let toggleSymbol = document.getElementById("toggle-symbol");
let toggleNumber = document.getElementById("toggle-number");

firstCopyButton.addEventListener("click", copyText);
secondCopyButton.addEventListener("click", copyText);

generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generatePassword);

function getRandomChar() {
    let pool = [];

    const letters = characters.slice(0, 52);
    pool = pool.concat(letters);

    if (toggleNumber.checked) {
        const numbers = characters.slice(52, 62);
        pool = pool.concat(numbers);
    }

    if (toggleSymbol.checked) {
        const symbols = characters.slice(62);
        pool = pool.concat(symbols);
    }

    let randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

function generatePassword() {
    let password = "";

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 16; j++) {
            password += getRandomChar();
        }
        if (i === 0) {
            firstPassword.textContent = password;
        } else {
            secondPassword.textContent = password;
        }
        password = ""; // reset password
    }
}

function copyText(event) {
    var passwordBox = event.target.closest(".password-box");
    var copyText = passwordBox.querySelector(".password-text");
    navigator.clipboard.writeText(copyText.textContent);
}
