document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copy");
  const passwordField = document.getElementById("password");
  const generateButton = document.getElementById("generate");
  const lengthInput = document.getElementById("length");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");

  function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  function generatePassword() {
    const length = parseInt(lengthInput.value);
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=<>?/{}[]|";

    let characters = "";
    let password = "";

    if (uppercaseCheckbox.checked) {
      characters += uppercaseChars;
    }
    if (lowercaseCheckbox.checked) {
      characters += lowercaseChars;
    }
    if (numbersCheckbox.checked) {
      characters += numbers;
    }
    if (symbolsCheckbox.checked) {
      characters += symbols;
    }

    if (characters.length === 0) {
      passwordField.innerText = "Select at least one character type.";
      return;
    }

    for (let i = 0; i < length; i++) {
      const randomChar = getRandomCharacter(characters);
      password += randomChar;
    }

    passwordField.innerText = password;
  }

  copyButton.addEventListener("click", function () {
    copyToClipboard(passwordField.innerText);
    copyButton.innerText = "Copied!";
    setTimeout(function () {
      copyButton.innerText = "Copy";
    }, 2000);
  });

  generateButton.addEventListener("click", generatePassword);
});
