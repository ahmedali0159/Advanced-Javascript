const students = [
    {id: 25, name: "Hasan"},
    {id: 31, name: "Ali"},
    {id: 35, name: "Shawon"},
    {id: 62, name: "Mijan"},
];

const names = students.map(s => s.name);
const idS = students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const biggerOne = students.find(s => s.id>30);
console.log(biggerOne);
