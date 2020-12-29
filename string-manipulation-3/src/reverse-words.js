/* exported reverseWords */
function reverseWords(string) {

var arr = string.split(' ');
var newArr = [];

for (var i = 0; i < arr.length; i++) {
  var string = arr[i];
  var newString = '';
  for (x = string.length - 1; x >= 0; x--) {
    newString += string[x];
  }
  newArr.push(newString);
}

var reverse = newArr.join(' ');

return reverse;
}
