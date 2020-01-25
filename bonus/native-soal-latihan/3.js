/*
* Convert time to words
* Function timeToWords menerima input berupa string yang merupakan sebuah waktu. 
* Function ini berfungsi merubah waktu menjadi sebuah kalimat.
* Waktu yang ditampilkan adalah waktu 24 jam.
*
* EXAMPLE 1 ------------------------
* Input: 
* '05:30'
* 
* Output:
* 'Jam setengah 6'
*
* EXAMPLE 2 ------------------------
* Input: 
* '03:10'
* 
* Output:
* 'Jam 3 lebih 10 menit'
*
* EXAMPLE 3 ------------------------
* Input: 
* '07:40'
* 
* Output:
* 'Jam 8 kurang 20 menit'
*
* RULES:
* - TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
*/
function timeToWords(waktu) {
  //Your code here !!!!!!!

  var arrWaktu = [], tmpStr = '';
  for (i = 0; i <= waktu.length; i++) {
    if (waktu[i] === ':' || i === waktu.length) {
      arrWaktu.push(Number(tmpStr));
      tmpStr = '';
    } else {
      tmpStr += waktu[i];
    }
  }
  // return arrWaktu;

  if (arrWaktu[0] >= 0 && arrWaktu[0] <= 23) {
    if (arrWaktu[1] === 0) {
      return `Jam ${arrWaktu[0]}.`;
    } else if (arrWaktu[1] === 30) {
      return `Jam setengah ${arrWaktu[0]+1}.`;
    } else if (arrWaktu[1] > 30 && arrWaktu[1] < 60) {
      return `Jam ${arrWaktu[0]+1} kurang ${60 - arrWaktu[1]} menit.`;
    } else if (arrWaktu[1] > 0 && arrWaktu[1] < 30) {
      return `Jam ${arrWaktu[0]} lebih ${arrWaktu[1]} menit.`;
    } else {
      return 'Jam sedang rusak.';
    }
  } else {
    return 'Jam sedang rusak.';
  }

}
console.log(timeToWords('10:10')); // Jam 10 lebih 10 menit
console.log(timeToWords('01:30')); // Jam setengah 2
console.log(timeToWords('09:47')); // Jam 10 kurang 13 menit
console.log(timeToWords('11:00')); // Jam 11
console.log(timeToWords('12:60')); // Jam sedang rusak
console.log(timeToWords('24:00')); // Jam sedang rusak