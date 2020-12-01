var books = [
  {
    isbn: "978-0439139601",
    title: "Harry Potter",
    author: "J.K. Rowling"
  },
  {
    isbn: "846-5312564798",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss"
  },
  {
    isbn: "457-8631233365",
    title: "The Alchemist",
    author: "Paulo Coelho"
  }
];

console.log('Books: ', books);
console.log('typeof books: ', typeof books);

JSON.stringify(books);

console.log('JSON books: ', JSON.stringify(books));
console.log('typeof JSON books: ', typeof JSON.stringify(books));

var studentJSON = '{"studentName":"Smendrick","id":546321}';
console.log('studentJSON: ', studentJSON);
console.log('typeof studentJSON: ', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('student: ', student);
console.log('typeof student: ', typeof student);
