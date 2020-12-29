/* exported titleCase */
function titleCase(string) {
  var arr = string.split(' ');
  var newArr = [];

  if (arr[0].toLowerCase() === 'javascript:') {
    newArr.push('JavaScript:')
  }
  else {
  newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
  }
  for (i = 1; i < arr.length; i++) {
    if (arr[i].toLowerCase() === 'api') {
      newArr.push('API');
    }
    else if (arr[i].toLowerCase() === 'web') {
      newArr.push('Web');
    }
    else if (arr[i].toLowerCase() === 'javascript') {
      newArr.push('JavaScript');
    }
    else if (arr[i].toLowerCase() === 'javascript:') {
      newArr.push('JavaScript:');
    }
    else if (arr[i].indexOf('-') !== -1) {
      var dashIndex = arr[i].indexOf('-');
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1, dashIndex + 1) + arr[i].charAt(dashIndex + 1).toUpperCase() + arr[i].slice(dashIndex + 2));
    }
    else if (arr[i - 1].indexOf(':') !== -1) {
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    else if (arr[i].length > 3) {
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    else {
      newArr.push(arr[i]);
    }
  }
  var newTitle = newArr.join(' ');
  return newTitle;
}
