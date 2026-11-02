//1 задание//

const siteA = ['anna', 'ivan', 'anna', 'petr', 'olga'];
const siteB = ['ivan', 'anna', 'sergey', 'olga', 'ivan'];

const setA = new Set(siteA);
console.log(setA);

console.log(setA.size);

console.log(setA.has('petr'));

const allVisitors = new Set([...siteA, ...siteB]);

const allVisitorsArray = [...allVisitors];
console.log(allVisitorsArray);

//2 задание//

const phoneBook = new Map();

phoneBook.set('Ivanov', '+7-900-111-22-33');
phoneBook.set('Petrova', '+7-900-444-55-66');
phoneBook.set('Sidorov', '+7-900-777-88-99');

const petrovaPhone = phoneBook.get('Petrova');
console.log(petrovaPhone);

phoneBook.delete('Sidorov');

console.log(phoneBook.size);
console.log(phoneBook.has('Sidorov'));

const names = [...phoneBook.keys()];
console.log(names);

phoneBook.forEach((phone, name) => {
    console.log(`${name}: ${phone}`);
});

//3 задание//

const students = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 },
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 }
];

const uniqueStringsSet = new Set(students.map(student => JSON.stringify(student)));
const uniqueStudents = [...uniqueStringsSet].map(str => JSON.parse(str));
console.log(uniqueStudents);

const gradeMap = new Map();
students.forEach(student => {
    if (!gradeMap.has(student.grade)) {
       gradeMap.set(student.grade, []);
    }
    gradeMap.get(student.grade).push(student.name);
});

gradeMap.forEach((names, grade) => {
    console.log(`Оценка ${grade}: ${names.join(', ')}`);
});
const uniqueGrades = [...gradeMap.keys()];
console.log(uniqueGrades);

//4 задание//

function sumTo(n) {
 if (n ===1) {
   return 1;
 }
   return n + sumTo(n - 1);
}
console.log(sumTo(1));
console.log(sumTo(3));
console.log(sumTo(5));

//5 задание//

function power(a, n) {
    if (n ===0) {
        return 1;
    }
    return a * power(a, n - 1);
}
console.log(power(2, 0));
console.log(power(2, 3));
console.log(power(3, 2));
console.log(power(5, 3));

// 1. power(2, 3) вызывает 2 * power(2, 2)//
//   2. power(2, 2) вызывает 2 * power(2, 1)//
//   3. power(2, 1) вызывает 2 * power(2, 0) //
//  4. power(2, 0) доходит до базового случая и возвращает 1 //

