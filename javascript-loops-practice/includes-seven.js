/* exported includesSeven */
function includesSeven(array) {
  var x = false;
  var i = 0;

  while (i < array.length) {
    if (array[i] === 7) {
      x = true;
      break;
    }
    else {
      x = false;
    }
    i++;
  }
  return x;
}
