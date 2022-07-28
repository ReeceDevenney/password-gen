// Assignment Code
var generateBtn = document.querySelector("#generate");

var masterArray = []
var lowerCaseArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var upperCaseArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numberArray = ['0','1', '2','3','4','5','6','7','8','9']
var specialCharactersArray = ['-', '+', '*', '/', '=', ']', '[', '}', '{', '<', '>', '?', '!', '@', '#', '$', '%', '&', '*']
// Write password to the #password input
function writePassword() {
    masterArray = []
    var generatePassword = function() {
        var passwordLength = window.prompt('how long will your password be? must be between 8-128 characters')
        if (passwordLength >= 8 && passwordLength <= 128) {
            console.log(passwordLength)
        } else {
            window.alert('please enter a value between 8-128 characters');
            return;
        }
        var lowerCase = window.confirm ('add lower case characters to password?');
        if (lowerCase) {
            masterArray = masterArray.concat(lowerCaseArray);
            console.log(masterArray)
        }
        var upperCase = window.confirm ('add uper case characters to password?');
        if (upperCase) {
            masterArray = masterArray.concat(upperCaseArray);
            console.log(masterArray)
        }
        var number = window.confirm ('add number characters to password?');
        if (number) {
            masterArray = masterArray.concat(numberArray);
            console.log(masterArray)
        }
        var specialCharacters = window.confirm ('add special Characters characters to password?');
        if (specialCharacters) {
            masterArray = masterArray.concat(specialCharactersArray);
            console.log(masterArray)
        }
    }
    var password = generatePassword()

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
