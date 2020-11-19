/* exported filterOutStrings */
function filterOutStrings(values) {
  var arr = [];
  var i = 0;

  while (i < values.length) {
    if (typeof values[i] === "string") {
    }
    else {
      arr.push(values[i]);
    }
    i++;
  }
  return arr;
}
