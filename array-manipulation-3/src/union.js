/* exported union */
function union(first, second) {
  var arr = [];

  for (var i = 0; i < first.length; i++) {
    arr.push(first[i]);
  }
  for (var x = 0; x < second.length; x++) {
    if (first.indexOf(second[x]) === -1) {
      arr.push(second[x]);
    }
  }
  return arr;
}
