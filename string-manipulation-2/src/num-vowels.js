/* exported numVowels */
function numVowels(string) {
  var num = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i).toUpperCase() === "A" || string.charAt(i).toUpperCase() === "E" || string.charAt(i).toUpperCase() === "I" || string.charAt(i).toUpperCase() === "O" || string.charAt(i).toUpperCase() === "U") {
      num += 1;
    }
  }
  return num;
}
