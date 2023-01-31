var arr = [
  {
    isbn: '978-0-9274-9747-3',
    title: 'Red Queen',
    author: 'Victoria Aveyard'
  },
  {
    isbn: '978-0-6212-3184-7',
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    isbn: '978-6-2773-2359-2',
    title: 'The Collector',
    author: 'John Fowles'
  }
];
console.log('value of arr: ', arr);
console.log('typeof arr: ', typeof arr);

var jsonString = JSON.stringify(arr);
console.log('value of jsonString: ', jsonString);
console.log('typeof jsonString: ', typeof jsonString);

var student = '{"Number id": 5,"name": "Tiko"}';
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);

var parseStudent = JSON.parse(student);
console.log('value of parseStudent: ', parseStudent);
console.log('typeof ', typeof parseStudent);
