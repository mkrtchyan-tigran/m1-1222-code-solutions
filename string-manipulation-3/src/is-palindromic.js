/* exported isPalindromic */
var isPalindromic = string => {
  var forward = string.split(' ').join('');
  var backward = '';
  for (var letter = forward.length - 1; letter > -1; letter--) {
    backward += forward[letter];
  }
  return forward === backward;
};
