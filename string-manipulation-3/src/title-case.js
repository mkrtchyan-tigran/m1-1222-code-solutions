/* exported titleCase */
var titleCase = title => {
  var wordsArr = title.toLowerCase().split(' ');
  var titleWords = [];
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (var word = 0; word < wordsArr.length; word++) {
    var currWord = '';
    for (var letter = 0; letter < wordsArr[word].length; letter++) {
      var currLetter = wordsArr[word][letter];
      if (wordsArr[word].includes('javascript')) {
        currWord += 'JavaScript' + wordsArr[word].slice(10);
        break;
      } else if (wordsArr[word] === 'api') {
        currWord += 'API';
        break;
      } else if (word === 0 && letter === 0) {
        currWord += currLetter.toUpperCase();
      } else if (wordsArr[word][letter - 1] === '-') {
        currWord += currLetter.toUpperCase();
      } else if (letter === 0 && (wordsArr[word - 1][wordsArr[word - 1].length - 1] === ':')) {
        currWord += currLetter.toUpperCase();
      } else if (letter === 0 && minorWords.indexOf(wordsArr[word]) === -1) {
        currWord += currLetter.toUpperCase();
      } else {
        currWord += currLetter;
      }
    }
    titleWords.push(currWord);
  }
  return titleWords.join(' ');
};
