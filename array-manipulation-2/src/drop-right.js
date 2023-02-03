/* exported dropRight */
function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(0, array.length - count);
  }
}
