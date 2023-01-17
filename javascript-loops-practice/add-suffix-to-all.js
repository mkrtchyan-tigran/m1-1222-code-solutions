/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var arr = [];
  for (var i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
    suffix[i] += arr;
  }
  return arr;
}
