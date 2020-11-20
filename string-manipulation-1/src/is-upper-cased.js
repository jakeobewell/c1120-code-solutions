/* exported isUpperCased */
function isUpperCased(word) {

  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) !== word.charAt(i).toUpperCase()) {
      return false;
    }
  }
  return true;
}
