/* exported isAnagram */
var isAnagram = (firstString, secondString) => {
  var firstArr = firstString.toLowerCase().split('').filter(letter => letter !== ' ');
  var secondArr = secondString.toLowerCase().split('').filter(letter => letter !== ' ');
  if (secondArr.length > firstArr.length) {
    return false;
  }
  for (var letter = 0; letter < secondArr.length; letter++) {
    if (firstArr.indexOf(secondArr[letter]) !== -1) {
      firstArr.splice(firstArr.indexOf(secondArr[letter]), 1);
    }
  }
  return (firstArr.length === 0);
};
