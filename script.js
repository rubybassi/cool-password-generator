// Declare button and user length variables
var generateBtn = document.querySelector("#generate");
var userLength = document.querySelector("#length");


// Write validation function which outputs error message if min or max of userLength is violated
function validateLength() {
  var errorMessage1 = document.querySelector("#lengthError");
  if (userLength.checkValidity() === false || userLength.value === "") { 
    errorMessage1.innerHTML = "Password length cannot be empty and must be between 8-128";
    //console.log("did not select correct value");
    return false;
  } else {
    errorMessage1.innerHTML = "";
    // console.log("selected correct value");
    return true;
  }
}


// Write validation function to check if at least one character input is selected
function validateSelection() {
  var errorMessage2 = document.querySelector("#selectionError");
  var checked = document.querySelectorAll('input:checked');
  if (checked.length === 0) {
    errorMessage2.innerHTML = "You must select at least one character type";
   // console.log('no checkboxes checked');
   return false;
  } else {
    errorMessage2.innerHTML = "";
  //  console.log(checked.length + 'checkboxes checked');
   return true;
  }
}


// Declare variables for character sets
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();
var number = "0123456789";
var special = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';


// Write generate password function 
function generatePassword() {
  var length = document.querySelector("#length").value;
  var userLower = document.querySelector("#lower").checked;
  var userUpper = document.querySelector("#upper").checked;
  var userNumber = document.querySelector("#number").checked;
  var userSpecial = document.querySelector("#special").checked;

// Check to see if character set selected and append to new string 
  var possibleCharacters = "";
  if (userLower) {
    possibleCharacters += lower; 
  }
  if (userUpper) {
    possibleCharacters += upper; 
    }
  if (userNumber) {
    possibleCharacters += number; 
    }
  if (userSpecial) {
    possibleCharacters += special; 
    }
  //console.log(possibleCharacters); //check characters
  //console.log(possibleCharacters.length); //check length
  
// loop the string to get random characters equal to the user inputted length
  var randomSelection = "";
  for (var i = 0; i < length; i++) {
      randomSelection += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      //console.log(randomSelection);
    }
  return randomSelection;
}


// Write password to the #password input
function writePassword() { 
  var lenghtIsValid = validateLength(); // calls and checks function's boolean value
  var selectionIsValid = validateSelection(); // calls and checks function's boolean value
  if (lenghtIsValid && selectionIsValid) {
      var password = generatePassword(); 
      var passwordText = document.querySelector("#password");
       passwordText.value = password;
  } 
}
// Add event listener to generate button and trigger function
generateBtn.addEventListener("click", writePassword);