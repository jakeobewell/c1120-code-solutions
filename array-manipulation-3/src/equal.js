/* exported equal */
function equal(first, second) {
  var stringOne = first.toString();
  var stringTwo = second.toString();
  if (stringOne === stringTwo) {
    return true;
  }
  else if (first === [] && second === []) {
    return true;
  }
  else {
    return false;
  }
}
