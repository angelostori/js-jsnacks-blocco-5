const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
let myClass;
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  if (student.name ==='Marco Lanci') {
    myClass = student.class
  }
}
console.log('for loop', myClass)

//find
const student = students.find(s => s.name === 'Marco Lanci');
const myClassEl = student.class;
console.log('find', myClassEl); // '3C'

//filter
const result = students.filter(s => s.name === 'Marco Lanci');
filterClass = result[0].class;
console.log('filter', filterClass); // '3C'
