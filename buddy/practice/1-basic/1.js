/**
 * Instruktur Adiel perlu bantuan sortir nilai para student. Dia ingin mencari ranking para student dan
 * menampilkan nama si juara.
 * Jika ada lebih dari satu juara yang sama, tampilkan semuanya
 *
 * RULES:
 * TIDAK BOLEH MENGGUNAKAN .sort, Set
 *
 * TIPS:
 *   message sang juara bisa menggunakan console.log
 *   score harus di return
 *
 * EXAMPLE:
 * 1.
 * var scores = [
 *   ["Fadhlan", 95],
 *   ["Aziz", 80],
 *   ["Gabriel", 90],
 *   ["Brahma", 100]
 * ]
 * result:
 * "Brahma adalah sang juara!"
 * [
 *   ["Brahma", 100],
 *   ["Fadhlan", 95],
 *   ["Gabriel", 90],
 *   ["Aziz", 80]
 * ]
 * 2.
 * var scores2 = [
 *   ["Audrick", 95],
 *   ["Adiel", 100],
 *   ["Ayu", 90],
 *   ["Semmi", 100]
 * ]
 * result:
 * "Adiel dan Semmi sang juara!"
 * [
 *   ["Adiel", 100],
 *   ["Semmi", 100],
 *   ["Audrick", 95],
 *   ["Ayu", 90]
 * ]
 * 3.
 * var scores3 = [
 *   ["Yusuf", 100],
 *   ["Fiqi", 95],
 *   ["Armedi", 100],
 *   ["Mardi", 90],
 *   ["Nadia", 100]
 * ]
 * result:
 * "Yusuf, Armedi dan Nadia adalah juara!"
 * [
 *   ["Yusuf", 100],
 *   ["Armedi", 100],
 *   ["Nadia", 100],
 *   ["Fiqi", 95],
 *   ["Mardi", 90]
 * ]
 */

function getChamps(list) {
  // code goes here
}

var score = [
  ["Vian", 90],
  ["Ari", 100],
  ["Taufik", 85],
  ["Akbar", 95]
];
console.log(getChamps(score));
/**
 * "Ari adalah juara!"
 * [
 *   ["Ari", 100],
 *   ["Akbar", 95],
 *   ["Vian", 90],
 *   ["Taufik", 85]
 * ]
 */

var score2 = [
  ["Joseph", 100],
  ["Jack", 90],
  ["Beck", 95],
  ["Alfred", 100]
];
console.log(getChamps(score2));
/**
 * "Joseph dan Alfred sang juara!"
 * [
 *   ["Joseph", 100],
 *   ["Alfred", 100],
 *   ["Beck", 95],
 *   ["Jack", 90]
 * ]
 */
console.log(getChamps([]));
// maaf, tidak ada peserta
