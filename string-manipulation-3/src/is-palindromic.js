/* exported isPalindromic */
function isPalindromic(string) {
  var newString = "";
  var backwardString = "";
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) !== " ") {
    newString += string[i];
    }
  }
  for (var x = newString.length - 1; x >= 0; x--) {
    backwardString += newString[x];
  }
  if (newString === backwardString) {
    return true;
  }
  else {
    return false;
  }
}
