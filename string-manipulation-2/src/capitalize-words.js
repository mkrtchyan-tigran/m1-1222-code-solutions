/* exported capitalizeWords */
function capitalizeWords(string) {
  var words = string.split(' ');
  var arr = [];
  for (var i in words) {
    var capitalizes = words[i].toLowerCase();
    capitalizes = capitalizes.charAt(0).toUpperCase() + capitalizes.slice(1);
    arr.push(capitalizes);
  }
  return arr.join(' ');
}
