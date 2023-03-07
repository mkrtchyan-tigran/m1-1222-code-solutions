/* exported unique */
function unique(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (arr.includes(array[i]) === false) {
      arr.push(array[i]);
    }
  }
  return arr;
}
