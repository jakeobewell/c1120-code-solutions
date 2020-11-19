/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var array = [];
  var i = 0;
  while (i < words.length) {
    array.push(words[i] + suffix);
    i++;
  }
  return array;
}
