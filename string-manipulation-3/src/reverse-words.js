/* exported reverseWords */
var reverseWords = string => {
  var wordsArr = string.split(' ');
  var reversedStr = '';
  var revSentence = '';
  for (var i = 0; i < wordsArr.length; i++) {
    for (var j = wordsArr[i].length - 1; j > -1; j--) {
      reversedStr += wordsArr[i][j];
    }
    if (reversedStr.length === wordsArr[i].length) {
      revSentence += reversedStr;
      reversedStr = '';
      if (wordsArr[i + 1]) {
        revSentence += ' ';
      }
    }
  }
  return revSentence;
};
