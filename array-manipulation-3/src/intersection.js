/* exported intersection */
function intersection(first, second) {
  var arr = [];

    for (var i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) !== -1) {
        arr.push(first[i]);
      }
    }
    return arr;
  }
