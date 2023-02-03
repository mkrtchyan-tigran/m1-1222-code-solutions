/* exported omit */
function omit(source, keys) {
  var obj = {};
  for (var key in source) {
    if (keys.indexOf(key) === -1) {
      obj[key] = source[key];
    }
  }
  return obj;
}
