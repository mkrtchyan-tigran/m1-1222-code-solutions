/* exported isVowel */
function isVowel(char) {
  var arr = ['a', 'e', 'i', 'u', 'o', 'A', 'E', 'I', 'U', 'O'];
  for (var i = 0; i < arr.length; i++) {
    if (char === arr[i]) {
      return true;
    }
  }
  return false;
}
