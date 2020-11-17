function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(6);

console.log('converMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Jakeob');

console.log('greetResult:', greetResult);

function getArea(width, height) {
  area = width * height;
  return area;
}

var getAreaResult = getArea(20, 15);

console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({firstName: 'Smendrick', lastName: 'Magician' })

console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement(['earth', 'water', 'fire', 'air']);

console.log('getLastElementResult:', getLastElementResult);
