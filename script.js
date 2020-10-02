// Assignment code for user inputs
var userLength = document.querySelector("#length");
var userLower = document.querySelector("#lower");
var userUpper = document.querySelector("#upper");
var userNumber = document.querySelector("#number");
var userSpecial = document.querySelector("#special");
var generateBtn = document.querySelector("#generate");




// Write validation function which outputs error message if min or max of userLength is violated
function validateLength() {
  var errorMessage1 = document.querySelector("#lengthError");
  if (userLength.checkValidity() === false || userLength.value === "") { 
    errorMessage1.innerHTML = "Password length cannot be empty and must be between 8-128";
    // console.log("did not select correct value");
  } else {
    errorMessage1.innerHTML = "";
    // console.log("selected correct value");
  }
}


// Write validation function to check if at least one character input is selected
function validateSelection() {
  var errorMessage2 = document.querySelector("#selectionError");
  var checked = document.querySelectorAll('input:checked');
  if (checked.length === 0) {
    errorMessage2.innerHTML = "You must select at least one character type";
   // console.log('no checkboxes checked');
  } else {
    errorMessage2.innerHTML = "";
  //  console.log(checked.length + 'checkboxes checked');
  }
}


// Create character sets
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var number = "0123456789";
var special = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';

// Write generate password function - need to see what user selected using eventlisterns .checked 
// and create a new string, then loop to the lengh of the userLength and add in 
function generatePassword() {


}


// Write password to the #password input
function writePassword() { 
  validateLength(); // calls function
  validateSelection(); // calls function
  
  var password = generatePassword(); // need to create a function to do this
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button and trigger function
generateBtn.addEventListener("click", writePassword);



// need to add preventDefault() somewhere to stop the browser taking over - read up