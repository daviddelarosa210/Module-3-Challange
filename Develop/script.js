// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 8;
var passwordChar = [];
var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','w','z'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')'];
var upperChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];




function generatePassword() {
 
 //need prompt the user for the password criteria
 //1.Password length 8-128
 //2. lowercase, uppercase, numbers, special characters





 //generate password based on criteria
 //validate the input
 //display generated password
  
  
  
  return "Generated password";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function prompts(){
  passwordChar = [];
  passwordLength = parseInt(prompt("How long do you want your password to be? (8-128 Characters)"));
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
    alert("Password length had to be between 8-128 Characters");
    return false;
  }
if (confirm("Do you want lowercase letters in your password?")){
  passwordChar = passwordChar.concat(lowercaseChar);
}
if (confirm("Do you want uppercase letters in your password?")){
  passwordChar = passwordChar.concat(upperChar);
}
if (confirm("Do you want special characters in your password?")){
  passwordChar = passwordChar.concat(specialChar);
}
if (confirm("Do you want numbers in your password?")){
  passwordChar = passwordChar.concat(numbers);
}
return true;
}