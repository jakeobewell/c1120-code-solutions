/* exported difference */
function difference(first, second) {
  var arr = [];

  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      arr.push(first[i]);
    }
  }
  for (var x = 0; x < second.length; x++) {
    if (first.indexOf(second[x]) === -1) {
      arr.push(second[x]);
    }
  }
  return arr;
}
