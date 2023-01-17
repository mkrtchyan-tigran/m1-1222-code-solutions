/* exported ransomCase */
function ransomCase(string) {
  var String = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      String += string[i].toLowerCase();
    } else {
      String += string[i].toUpperCase();
    }
  }
  return String;
}
