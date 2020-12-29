/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var newWord = '';
  var x;
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      x = string.charAt(secondIndex);
    }
    else if (i === secondIndex) {
      x = string.charAt(firstIndex);
    }
    else {
      x = string.charAt(i);
    }
    newWord += x;
  }
  return newWord;
}
