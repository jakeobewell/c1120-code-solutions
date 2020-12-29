/* exported unique */
function unique(array) {
  var arr = [];

  for (var i = 0; i < array.length; i++) {
    if (arr.indexOf(array[i]) === -1) {
      arr.push(array[i]);
    }
  }
  return arr;
}
