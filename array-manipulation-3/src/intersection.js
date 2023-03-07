/* exported intersection */
function intersection(first, second) {
  var arr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      arr.push(first[i]);
    }
  }
  return arr;
}
