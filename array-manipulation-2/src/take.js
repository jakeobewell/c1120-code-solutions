/* exported take */
function take(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  else {
  for (var i = 0; i < count; i++) {
    arr.push(array[i]);
    }
  }
  return arr;
}
