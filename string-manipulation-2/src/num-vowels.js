/* exported numVowels */
function numVowels(string) {
  var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (arr.indexOf(string[i]) !== -1) {
      count++;
    }
  }
  return count;
}
