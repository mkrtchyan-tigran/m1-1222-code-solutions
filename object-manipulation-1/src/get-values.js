/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var value in object) {
    arr.push(object[value]);
  }
  return arr;
}
