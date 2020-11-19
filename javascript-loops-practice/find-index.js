/* exported findIndex */
function findIndex(array, value) {
  var x = -1;
  var i = 0;

  while (i < array.length) {
    if (array[i] === value) {
      x = i;
      break;
    }
    i++
  }
  return x;
}
