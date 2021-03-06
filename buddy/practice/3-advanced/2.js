/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.
Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q
output: 4 viruses detected
Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r
outuput: 3 viruses detected
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
*/

/*
Algoritma:
1. cek, jika "str" sama dengan string kosong Atau "viruses" sama dengan string kosong Atau 'viruses' sama dengan undefined, maka kembalikan nilai string 'No virus detected'
2. buat variable baru dengan nama 'strToLowerCase' dengan nilai str.toLowerCase(), untuk mengubah huruf kapital menjadi huruf kecil
3. buat variable baru dengan nama 'virusesToLowerCase' dengan nilai viruses.toLowerCase()
4. buat variable baru dengan nama 'virusesToLowerCaseSplit' dengan nilai "virusesToLowerCase".split('|'), untuk menghapus tanda '|'.
5. buat variable baru lagi dengan nama 'count' dengan nilai 0
6. lakukan nested looping pada 'strToLowerCase' dan "virusesToLowerCaseSplit" sampai akhir nilai
  6a. jika 'strToLowerCase' index ke a sama dengan "virusesToLowerCaseSplit" index ke b, maka count bertambah satu
7. buat variable dengan nama "front" dengan nilai string 'virus'
8. buat variable dengan nama "back" dengan nilai string 'detected'
9. jika count lebih dari satu, maka "front" nilai nya diganti dengan string 'viruses'. jika tidak memenuhi lanjut step 10.
10. jika count sama dengan 1, maka 'front'. jika tidak memenuhi, lanjut step 11
11. maka kembalikan nilai string 'No virus detected'
12 kembalikan nilai count ditambah string 'front' ditambah string spasi ditambah string "back"
*/

function virusCheck(str, viruses) {
  // code goes here

  // if ((str || viruses) == '' || !viruses) {return 'no virus detected';}

  // var strToLowerCase = str.toLowerCase();
  // var virusesToLowerCase = viruses.toLowerCase();
  // var virusesToLowerCaseSplit = virusesToLowerCase.split('|');
  // var count = 0;
  // var front = 'virus';
  // var back = 'detected';

  // for (i = 0; i < strToLowerCase.length; i++) {
  //   for (j = 0; j < virusesToLowerCaseSplit.length; j++) {
  //     if (strToLowerCase[i] === virusesToLowerCaseSplit[j]) {
  //       count++;
  //     }
  //   }
  // }
  // if (count > 1) {
  //   front = 'viruses';
  // } else if (count === 1) {
  //   front;
  // } else {
  //   return 'no virus detected';
  // }
  // return `${count} ${front} ${back}`;

  if (!str || !viruses) {return 'no virus detected';}

  var string = str.toLowerCase();
  var virus = viruses.toLowerCase().split('|');
  var count = 0;

  for (i = 0; i < string.length; i++) {
    for (j = 0; j < virus.length; j++) {
      if (string[i] === virus[j]) {count++;}
    }
  }

  var number = count ? count + ' ' : 'no ' ;
  var front = 'virus';
  front += count > 1 ? 'es' : '' ;
  var back = 'detected';
  return `${number}${front} ${back}`;

}

console.log(virusCheck("qlD4MZax0raQqew", "x|0|q")); // 5 viruses detected
console.log(virusCheck("HH0NBP1zRa", "h|r")); // 3 viruses detected
console.log(virusCheck("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6 viruses detected
console.log(virusCheck("mjBgPlzks", "m")); // 1 virus detected
console.log(virusCheck("AIn4Ks05bBaa", "x")); // No virus detected
console.log(virusCheck("RsMFjBUjvIaP")); // No virus detected
console.log(virusCheck("")); // No virus detected
