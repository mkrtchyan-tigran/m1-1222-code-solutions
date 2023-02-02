/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    return array.slice(0, count);
  }
}
