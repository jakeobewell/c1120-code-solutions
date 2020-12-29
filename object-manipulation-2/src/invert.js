/* exported invert */
function invert(source) {
  var newObj = {};
  for (key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
