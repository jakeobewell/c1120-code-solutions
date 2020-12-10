/* exported chunk */
function chunk(array, size) {
  var arr = [];
  var _chunk = [];
  var chunkSize = size;

  for (i = 0; i < array.length; chunkSize += size) {
    if (chunkSize > array.length) {
      chunkSize = array.length;
    }
    for (i; i < chunkSize; i++) {
      _chunk.push(array[i]);
      }
    arr.push(_chunk);
    _chunk = [];
  }
  return arr;
}
