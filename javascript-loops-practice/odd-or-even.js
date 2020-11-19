/* exported oddOrEven */
function oddOrEven(array) {
  var i = 0;
  var arr = [];

  while (i < array.length) {
    if (array[i] %2 === 0) {
      arr.push("even");
    }
    else {
      arr.push("odd");
     }
    i++;
  }
  return arr;
}
