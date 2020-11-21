/* exported lastChars */
function lastChars(length, string) {
  if (string.length > length) {
  return string.slice((string.length - length), string.length);
  }
  else {
    return string;
  }
}
