/**
 * Encrypt Word
 * 
 * Function encryptWord menerima input berupa string yang akan menghasilkan sebuah string baru,
 * untuk menghasilkan string barunya kita harus merubah string awalnya menjadi array multidimensi
 * dimana setiap barisnya hanya boleh diisi oleh 4 karakter
 * setelah berhasil membuat array multidimensinya 
 * maka proses pembuatan outputnya mengambil karakter dari paling kiri atas lalu kebawah hingga ujung array
 * lalu kembali keatas pada kolom selanjutnya mulai dari baris pertama
 * 
 * 
 * Input :
 * feedthedog
 * 
 * Proses:
 * [
 *   [ 'f', 'e', 'e', 'd' ],
 *   [ 't', 'h', 'e', 'd' ],
 *   [ 'o', 'g' ]
 * ]
 * 
 * 
 * Output : 
 * ftoehgeedd
 * 
 * 
 * RULES 
 * 1. TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
 * 
 */
function encryptWord(kata) {
  // Your code here

  var size = 4;

  var arr = [], tmpArr = [];
  for (i = 1; i <= kata.length; i++) {
    if (i % size === 0 || i === kata.length) {
      tmpArr.push(kata[i-1]);
      arr.push(tmpArr);
      tmpArr = [];
    } else {
      tmpArr.push(kata[i-1]);
    }
  }
  // return arr;

  var jumble = '';
  for (i = 0; i < size; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j][i] !== undefined) {
        jumble += arr[j][i];
      }
    }
  }
  return jumble;

}
console.log(encryptWord("haveaniceday"))
//haeandviaecy
console.log(encryptWord("feedthedog"))
//ftoehgeedd
console.log(encryptWord("sekarangtahunduaribuduapuluh"))
//srtnrdueaadiulknhubauaguauph