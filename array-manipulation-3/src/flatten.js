/* exported flatten */
function flatten(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var newArr = [];
    newArr.push(array[i]);
    if (Array.isArray(newArr[0])) {
    for (var x = 0; x < newArr[0].length; x++) {
      arr.push(newArr[0][x]);
      }
    }
    else {
      arr.push(newArr[0]);
    }
  }
  return arr;
}
