/* exported getWords */
function getWords(string) {
  var arr = []
    if (string.length > 0) {
      arr = string.split(" ");
    }
  return arr;
}
