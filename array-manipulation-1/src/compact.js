/* exported compact */
function compact(array) {
  var arr = [];
  for (i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
    else {
      arr.push();
    }
  }
  return arr;
}
