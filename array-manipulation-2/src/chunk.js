/* exported chunk */
function chunk(array, size) {
  var arr = [];
  var i = 0;

  while (i < array.length) {
    arr.push(array.slice(i, i + size));
    i += size;
  }
  return arr;
}
