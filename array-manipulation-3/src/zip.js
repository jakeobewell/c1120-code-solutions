/* exported zip */
function zip(first, second) {
  var arr = [];

  for (var i = 0; i < first.length && i < second.length; i++) {
    var newArr = [];
    newArr.push(first[i]);
    newArr.push(second[i]);
    if (newArr.length === 2) {
    arr.push(newArr);
    }
  }
  return arr;
}
