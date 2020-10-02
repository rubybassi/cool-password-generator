// Assignment code for user inputs
var userLength = document.querySelector("#length");
var userLower = document.querySelector("#lower");
var userUpper = document.querySelector("#upper");
var userNumber = document.querySelector("#number");
var userSpecial = document.querySelector("#special");


// Write validation function which outputs error message if min or max of userLength is violated
function validateLength() {
  var errorMessage1 = document.querySelector("#lengthError");
  if (this.checkValidity() === false) {
    errorMessage1.innerHTML = "Value must be between 8-128";
  } else {
    errorMessage1.innerHTML = "";
  }
}
// Generate length validation function
userLength.addEventListener("blur", validateLength);



var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { //need to validate if user checked at least one checkbox
  var password = generatePassword(); // need to create a function to do this
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button and trigger function
generateBtn.addEventListener("click", writePassword);




