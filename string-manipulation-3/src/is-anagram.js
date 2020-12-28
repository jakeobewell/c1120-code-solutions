/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newStringOne = firstString.replaceAll(' ', '').toLowerCase();
  var newStringTwo = secondString.replaceAll(' ', '').toLowerCase();

  newStringOne = newStringOne.split('');
  newStringTwo = newStringTwo.split('');

  newStringOne = newStringOne.sort().join('');
  newStringTwo = newStringTwo.sort().join('');

  if (newStringOne === newStringTwo) {
    return true
  }
  else {
    return false;
  }
}
