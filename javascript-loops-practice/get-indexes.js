/* exported getIndexes */

function getIndexes(array) {
  var newArray = [];
  var i = 0;
  while (i < array.length) {
    newArray.push(i);
    i++
  }
  return newArray;
}
