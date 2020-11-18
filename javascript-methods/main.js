var small = 4;

var medium = 12;

var large = 58;

var maximumValue = Math.max(small, medium, large);

console.log('Value of maximumValue:', maximumValue);

var heroes = ['Moon Knight', 'Black Panther', 'Raven', 'Iceman'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Value of randomHero', randomHero);

var library = [
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'The Lion, The Witch And The Wardrobe',
    author: 'C.S. Lewis'
  },
  {
    title: 'Eragon',
    author: 'Christopher Paolini'
  }
]

var lastBook = library.pop();

console.log('Value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('Value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Raushmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('Value of library:', library);

var fullName = 'Jakeob Ewell';

var firstAndLastName = fullName.split(' ');

console.log('Value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('Value of sayMyName:', sayMyName);
