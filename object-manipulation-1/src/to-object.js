/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  var x = keyValuePair[0];
  var y = keyValuePair[1];
  newObject[x] = y;
  return newObject;
}
