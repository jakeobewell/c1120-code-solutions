/* exported capitalizeWords */
function capitalizeWords(string) {
  var newWord = '';
  var x;
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      x = string.charAt(i).toUpperCase();
    }
    else if (string.charAt(i - 1) === " ") {
      x = string.charAt(i).toUpperCase();
    }
    else {
      x = string.charAt(i).toLowerCase();
    }
    newWord += x;
  }
  return newWord;
}
