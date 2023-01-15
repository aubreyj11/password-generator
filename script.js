// Assignment Code
var generateBtn = document.querySelector("#generate");


// Special Characters
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== undefined) {
    passwordText.value = password;
  } else {
    passwordText.value = "Gathering Requirements...";
  };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Prompts to appear after click
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for your password.  It must be more than 8 but less than 128.");
  var hasLength = (passwordLength !== null);
  if (hasLength) {
    
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a value within the range.")
      setTimeout(() => generateBtn.click(), 300); 
    } else {
          var numbers = confirm("Do you want numbers in your password?");
          var lowercases = confirm("Do you want lowercases in your password?");
          var uppercases = confirm("Do you want uppercases in your password?");
          var special = confirm("Do you want special characters in your password?");
          
          if (!numbers && !lowercases && !uppercases && !special) {
            alert("Please select at least one criteria.")
            setTimeout(() => generateBtn.click(), 300); 
          } else {

              var functionArray = [
                function getNumbers() {
                  return String.fromCharCode(Math.floor(Math.random() * 10 + 48))
                },
                
                function getLowerCases() {
                  return String.fromCharCode(Math.floor(Math.random() * 26 + 97))
                },

                function getUpperCases() {
                  return String.fromCharCode(Math.floor(Math.random() * 26 + 65))
                },

                function getSpecialCharacters() {
                  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
                }
              ];

      
                
                var randomPasswordGenerated = "";

                do {
                  var randomNumberPicked = Math.floor(Math.random() * 4);

                  if (randomNumberPicked === 0 && numbers) {
                    randomPasswordGenerated += functionArray[randomNumberPicked]();
                  };

                  if (randomNumberPicked === 1 && lowercases) {
                    randomPasswordGenerated += functionArray[randomNumberPicked]();
                  };

                  if (randomNumberPicked === 2 && uppercases) {
                    randomPasswordGenerated += functionArray[randomNumberPicked]();
                  };

                  if (randomNumberPicked === 3 && special) {
                    randomPasswordGenerated += functionArray[randomNumberPicked]();
                  };
                }
                while (randomPasswordGenerated.length < parseInt(passwordLength));

      


                return randomPasswordGenerated;

           }
    }
  }
}

// Snippets of code were modeled after code on OneCompiler

