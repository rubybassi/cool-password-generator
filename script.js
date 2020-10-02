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
  if (this.checkValidity() === false || this.value == "") { // NEED TO WRITE CONDITION IF NULL
    errorMessage1.innerHTML = "Password length cannot be empty and must be between 8-128";
   // console.log("did not select correct value");
  } else {
    errorMessage1.innerHTML = "";
  //  console.log("selected correct value");
  }
}
// Generate length validation function
userLength.addEventListener("blur", validateLength);



// Write validation function to check if at least one input is selected
function validateSelection() {
    if (!document.getElementById("upper").checked) {
      var errorMessage2 = document.querySelector("#selectionError");
      // alert("pleast tick atleast one"); 
      //console.log("did not select upper");
    } else {
     //console.log("did select upper");
      errorMessage2 = "";
    }
  };
// Generate length validation function
generateBtn.addEventListener("click", validateSelection);

/*

// Write password to the #password input
function writePassword() { //need to validate if user checked at least one checkbox
  var password = generatePassword(); // need to create a function to do this
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button and trigger function
generateBtn.addEventListener("click", writePassword);

*/


