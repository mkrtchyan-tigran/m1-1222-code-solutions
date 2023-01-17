/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split('');
  var swap = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = swap;
  return arr.join('');
}
