/**
Olah Data Students
Function menerima input berupa array-of-objects yang berisi nama student beserta score mereka. Function `groupStudents`
akan mengelompokkan student menjadi 2 kelompok: student dengan nilai >= (lebih besar atau sama dengan) rata-rata di dalam array di property 'above'
dan student dengan nilai dibawah rata-rata di dalam array di property 'under'. 
Contoh:
- input: [
    { name: 'Foobar', score: 75 },
    { name: 'Foobaz', score: 60 },
    { name: 'Foo', score: 75 }]
- output:
   { above: [ 'Foobar', 'Foo' ], under: [ 'Foobaz' ] }
 
Aturan coding:
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
*/
function groupStudents (students) {
  // your code here
  var avg = 0;
  for (i = 0; i < students.length; i++) {
      avg += students[i].score;
  }
  avg /= students.length;

  var byScores = {};
  for (j = 0; j < students.length; j++) {
      if (students[j].score >= avg && !byScores.hasOwnProperty('above')) {
          byScores.above = [];
          continue;
      }
      if (students[j].score < avg && !byScores.hasOwnProperty('under')) {
        byScores.under = [];
        continue;
      }
  }

  for (k = 0; k < students.length; k++) {
      if (students[k].score >= avg) {
          byScores.above.push(students[k].name);
      } else {
          byScores.under.push(students[k].name);
      }
  }

  return byScores;
}

//test-cases
console.log(groupStudents([
{ name: 'Dimitri', score: 90 },
{ name: 'Sergei', score: 70 },
{ name: 'Alisa', score: 50 },
{ name: 'Viktor', score: 65 },
{ name: 'Vladimir', score: 40 },
{ name: 'Alexei', score: 70 }
]));
//{
// above: [ 'Dimitri', 'Sergei', 'Viktor', 'Alexei' ],
// under: [ 'Alisa', 'Vladimir' ]
//}

console.log(groupStudents([
{ name: 'Foo', score: 100 },
{ name: 'Bar', score: 100 },
{ name: 'Baz', score: 100 }
]));
// { above: [ 'Foo', 'Bar', 'Baz' ] }

console.log(groupStudents([]));
// {}