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
