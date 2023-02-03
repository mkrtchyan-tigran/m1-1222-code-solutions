/* exported drop */
function drop(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(count);
  }
}
