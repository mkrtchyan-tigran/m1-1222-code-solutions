var firstNum = 4;
var secondNum = 8;
var thridNum = 12;

var maximumValue = Math.max(firstNum, secondNum, thridNum);
console.log('maximum value:', maximumValue);

var heroes = ['Spider-Man', 'Deadpool', 'Superman', 'Iron Man'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The 48 Laws of Power',
    author: 'Robert Greene'
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki'
  },
  {
    title: 'Code Complete',
    author: 'Steve McConnell'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1);
console.log(library);

var fullName = 'Tigran' + ' ' + 'Mkrtchyan';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);
