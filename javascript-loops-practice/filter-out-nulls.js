/* exported filterOutNulls */
function filterOutNulls(values) {
  var arr = [];
  var i = 0;

  while (i < values.length) {
    if (values[i] !== null) {
      arr.push(values[i])
    }
    i++;
  }
  return arr;
}
