/* exported ransomCase */
function ransomCase(string) {
  var newWord = '';
  var x;
  for (var i = 0; i < string.length; i++){
  if (i % 2) {
    x = string.charAt(i).toUpperCase();
    }
    else {
      x = string.charAt(i).toLowerCase();
    }
    newWord += x;
  }
  return newWord;
}
