/* exported omit */
function omit(source, keys) {
  var newObj = {};
  for (key in source) {
    newObj[key] = source[key];
  }

  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
     delete newObj[keys[i]];
    }
  }
  return newObj;
}
