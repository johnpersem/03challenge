// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

const ALPHA_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const SPECIAL_CHARS = "!@#$%^&*()_+".split("");

function generatePassword() {
  let chars = [];
  let len = 0;
  let selectedTypes = [];
  let typeConfig = {
    lower: false,
    upper: false,
    number: false,
    special: false
  };

  while (len < 8 || len > 128) {
    len = Number(prompt("Choose a password length between 8 and 128:"));
  }

  while (selectedTypes.length < 1) {
    typeConfig.lower = confirm("Include lowercase letters?");
    typeConfig.upper = confirm("Include uppercase letters?");
    typeConfig.number = confirm("Include numbers?");
    typeConfig.special = confirm("Include special characters?");
    Object.keys(typeConfig).forEach((t) => {
      if (typeConfig[t]) {
        selectedTypes.push(t);
      }
    });
    if (selectedTypes.length < 1) {
      alert("You must choose at least one type!");
    }
  }

  for (let i = 0; i < len; i++) {
    let type = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
    switch (type) {
      case "lower":
        chars.push(ALPHA_CHARS[Math.floor(Math.random() * ALPHA_CHARS.length)].toLowerCase());
        break;
      case "upper":
        chars.push(ALPHA_CHARS[Math.floor(Math.random() * ALPHA_CHARS.length)]);
        break;
      case "number":
        chars.push(Math.floor(Math.random() * 9));
        break;
      case "special":
        chars.push(SPECIAL_CHARS[Math.floor(Math.random() * SPECIAL_CHARS.length)]);
        break;
    }
  }

  return chars.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

