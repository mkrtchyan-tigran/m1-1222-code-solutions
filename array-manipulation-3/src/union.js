/* exported union */
function union(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    if (arr.includes(first[i]) === false) {
      arr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (arr.includes(second[j]) === false) {
      arr.push(second[j]);
    }
  }
  return arr;
}
