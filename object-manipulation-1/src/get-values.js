/* exported getValues */
function getValues(object) {
  var values = [];
  var x;
  for (x in object) {
    values.push(object[x]);
  }
  return values;
}
