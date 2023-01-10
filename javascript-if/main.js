/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}
isUnderFive();

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
isEven();

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  }
  return false;
}
startsWithJ('Javascript');

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return true;
  }
  return false;
}
isOldEnoughToDrink();

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return true;
  }
  return false;
}
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
isOldEnoughToDrinkAndDrive();

function categorizeAcidity(pH) {
  if ((pH >= 0) && (pH <= 6)) {
    return 'acid';
  } if ((pH >= 8) && (pH <= 14)) {
    return 'base';
  } if (pH === 7) {
    return 'neutral';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return "We're the warner brothers!";
  } if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
