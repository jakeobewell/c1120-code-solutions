/* exported takeRight */
function takeRight(array, count) {
  var arr = [];
  if (array.length < count) {
    return array;
  }
  for (var i = array.length - count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
