/* exported getKeys */
function getKeys(object) {
  var keys = [];
  var x;
  for (x in object) {
    keys.push(x);
  }
  return keys;
}
