/* exported drop */
function drop(array, count) {
  var arr = [];
  if (array.length === 0) {
    return arr;
  }
  else {
    for (var i = count; i < array.length; i++) {
      arr.push(array[i]);
    }
  }
  return arr;
}
