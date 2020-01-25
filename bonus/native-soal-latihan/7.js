/**
 * 
 * Sebuah sekolah melakukan ospek, yang dimana siswanya minum 1 botol air yang harus di habiskan,
 * bersama kelompok ospeknya masing2 
 * 
 * function ini mencari digiliran siapakah air habis selama air di minum secara berurutan.
 * 
 * function ini menerima dua parameter, yaitu people dan ml
 *  people adalah sebuah array of object, yang object tersebut memiliki nama dan shot.
 *  shot adalah berapa kali siswa tersebut dapat meneguk minuman dalam 1 putaran,
 * 
 *  ml adalah kapasitas dari air yang di beri oleh panitia ospek
 *  
 *  1x shot akan menghabiskan 25ml air 
 * 
 * contoh : 
 *  people: [
 *  { nama: "faris", shot: "2"},
 *  { nama: "indra", shot: "1"}
 * ]
 *  ml: 130
 *  
 * proses
 *  turn1:  air tersisa 55 ml karena: 
 *          faris melakukan 2 shot berarti air berkurang menjadi 80
 *          dan indra melakukan 1 shot berarti air berkurang menjadi 55 
 *          jadi air belum habis, harus di ulang lagi meminum dari orang pertama.
 *  turn2:  faris melakukan 2 shot lagi yang berarti air berkurang menjadi 5 ml
 *          dan indra melakukan 1 shot lagi berarti air di habiskan oleh si indra
 * 
 * maka output yang di hasilkan adalah "indra" 
 * 
 * RULES: NO RULES
 * 
 */

function main (people, ml) {
  // your code here

  while (ml > 0) {
    for (i = 0; i < people.length; i++) {
      ml -= 25 * people[i].shot;
      if (ml <= 0) {var x = i; break;}
    }
  }
  return people[x].nama;

}

console.log(main(
  [
    { nama: 'indra', shot: 2 },
    { nama: 'gusti', shot: 1 },
    { nama: 'darindra', shot: 3 }
], 200))
// indra

console.log(main(
  [
    { nama: 'rivan', shot: 3 },
    { nama: 'fauzan', shot: 5 },
    { nama: 'ramadhan', shot: 4 },
    { nama: 'akbar', shot: 2 },
], 750))
// rivan