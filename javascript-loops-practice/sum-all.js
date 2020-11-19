/* exported sumAll */

function sumAll(numbers) {
  var sum = 0;
  var i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}
