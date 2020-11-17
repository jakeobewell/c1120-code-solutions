/* eslint-disable no-console, no-unused-vars, dot-notation */

var student = {
  firstName : 'Jakeob',
  lastName : 'Ewell',
  age : 29,
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'General Manager';

console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student:', student);

var vehicle = {
  make : 'Honda',
  model : 'Element',
  year : '2004',
};

vehicle['color'] = 'Black';

vehicle['isConvertible'] = false;

console.log('Value of color:', vehicle['color']);
console.log('Value of isConvertible:', vehicle['isConvertible']);
console.log('Value of vehicle:', vehicle);

var pet = {
  name : 'Amaterasu',
  type : 'Dog',
};

delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);
