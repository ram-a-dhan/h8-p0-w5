/**
 * Jack perlu bantuanmu untuk membersihkan data daftar studentnya.
 * Tolong membersihkan semua duplikat dan return hasil yang sudah dibersihkan dan diurutkan
 *
 * RULES:
 * TIDAK BOLEH MENGGUNAKAN Set
 *
 * EXAMPLE:
 * 1.
 * INPUT:
 * ["Jack", "Jekyll", "Jeff", "Jack", "Tom", "Alfred", "Alfred", "Tom"]
 * OUTPUT:
 * ["Alfred", "Jack", "Jeff", "Jekyll", "Tom"]
 * 2.
 * INPUT:
 * []
 * OUTPUT:
 * "maaf, tidak ada student"
 */

function sortStudent(students) {
  // code goes here

  if (!students.length) {return 'maaf, tidak ada student';}

  var tmp;
  for (i = 0; i < students.length-1; i++) {
    for (j = 0; j < students.length-1-i; j++) {
      if (students[j] > students[j+1]) {
        tmp = students[j];
        students[j] = students[j+1];
        students[j+1] = tmp;
      }
    }
  }
  // return students;

  for (i = 0; i < students.length-1; i++) {
    if (students[i] === students[i+1]) {
      students.splice(i+1,1);
      i--;
    }
  }
  return students;

}

var students = ["Armedi", "Ari", "Armedi", "Yusuf", "Ari", "Yusuf", "Fiqi"];

console.log(sortStudent(students));
// ["Ari", "Armedi", "Fiqi", "Yusuf"]

var students2 = [
  "Brahma",
  "Giovanni",
  "Akbar",
  "Brahma",
  "Giovanni",
  "Gabriel"
];
console.log(sortStudent(students2));
// ["Akbar", "Brahma", "Gabriel", "Giovanni"]

console.log(sortStudent([]));
// maaf, tidak ada student
