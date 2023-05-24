// Function to generate password based on length and character types
function generatePassword() {
    var length = getPasswordLength();
    var characterTypes = getCharacterTypes();
  
    if (characterTypes.length === 0) {
      alert("Please select at least one character type.");
      return "";
    }
  
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var characterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
      password += getRandomCharacter(characterType);
    }
  
    return password;
  }
  
  // Function prompt for password length and validate that it within the criterias confines
  function getPasswordLength() {
    var length = parseInt(prompt("Enter the desired password length (8-128 characters):"));
  
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return getPasswordLength();
    }
  
    return length;
  }
  
  // Function prompt for character types and validate that it within the criterias confines
  function getCharacterTypes() {
    var characterTypes = [];
    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");
  
    if (!lowercase && !uppercase && !numeric && !special) {
      return getCharacterTypes();
    }
  
    if (lowercase) {
      characterTypes.push("lowercase");
    }
  
    if (uppercase) {
      characterTypes.push("uppercase");
    }
  
    if (numeric) {
      characterTypes.push("numeric");
    }
  
    if (special) {
      characterTypes.push("special");
    }
  
    return characterTypes;
  }
  
  // function has characters for criteria so it can generate a random character from these lists
  function getRandomCharacter(type) {
    var characters = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: "!@#$%^&*()-_=+[]{}<>?/",
    };
  
    var characterSet = characters[type];
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet.charAt(randomIndex);
  }
  
  // Get references to the generate element
  var generate = document.querySelector("#generate");
  
  // Write password to the password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Generate button with Event listener for click action
  generate.addEventListener("click", writePassword);
  