/* exported dropRight */
function dropRight(array, count) {
  var arr = [];
  if (array.length < count) {
    return array;
  }
  for (var i = 0; i < (array.length - count); i++) {
    arr.push(array[i]);
  }
  return arr;
}
