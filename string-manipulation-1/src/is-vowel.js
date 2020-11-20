/* exported isVowel */
function isVowel(character) {
  if (character.toUpperCase() === "A" || character.toUpperCase() === "E" || character.toUpperCase() === "I" || character.toUpperCase() === "O" || character.toUpperCase() === "U") {
    return true;
  }
  else {
    return false;
  }
}
