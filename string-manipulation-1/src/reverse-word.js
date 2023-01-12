/* exported reverseWord */
function reverseWord(word) {
  var arr = '';
  for (var i = word.length - 1; i >= 0; i--) {
    arr += word[i];
  }
  return arr;
}
