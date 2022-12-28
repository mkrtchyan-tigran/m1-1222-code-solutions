var student = {
  firstName: 'Tigran',
  lastName: 'Mkrtchyan',
  age: 21
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log(student);

var vehicle = {
  make: 'Mercedes-Benz',
  model: 'G Class',
  year: 2023
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log(vehicle);

var pet = {
  name: 'Rocky',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);
