/**
 * ==================
 * How far can I go
 * =================
 *
 * Terdapat sebuah lintasan yang merupakan array multi dimensi yang di setiap indexnya memiliki tiga kemungkinan value
 * O -> adalah posisi mobil
 * X -> adalah tujuan akhir mobil
 * ' ' -> adalah lintasan biasa
 *
 * Setiap mobil pasti akan memiliki bensin untuk berjalan, buatlah sebuah fungsi yang akan menentukan dimana mobil tersebut akan
 * berhenti dengan jumlah bensin yang dimiliki.
 *
 * Asumsi
 * - Mobil psti bergerak ke arah kanan, jika sudah mencapai akhir mobil akan turun ke kolom dibawahnya dan seterusnya
 * - Setiap kali mobil bergerak maka bensin akan berkurang 1l.
 *
 * Contoh:
 *
 * Lintasan
 * [
 *  [' ', ' ', 'O', ' ']
 *  [' ', ' ', 'X', ' ']
 * ]
 *
 * Jumlah bensin 2L
 *
 * Output:
 * [
 *  [' ', ' ', ' ', ' ']
 *  ['O', ' ', 'X', ' ']
 * ]
 *
 *
 */

function howFarCanIGo(track, fuel) {
  // Happiness starts here

  loop_1: for (i = 0; i < track.length; i++) {
            for (j = 0; j < track[i].length; j++) {
              if (track[i][j] === 'O') {
                var car = [i,j];
                continue;
              }
              if (track[i][j] === 'X') {
                var finish = [i,j];
                break loop_1;
              }
            }
          }
          // return [car,finish];
  
  out:while (fuel) {
        var areWeThereYet = false;
        for (i = 0; i < track.length; i++) {
          for (j = 0; j < track[i].length; j++) {
            if (i === car[0] && j === car[1]) {
              track[i][j] = ' ';
              if (j === track[i].length-1) {
                if (track[i+1][0] === 'X') {areWeThereYet = true;}
                track[i+1][0] = 'O';
                car = [i+1, 0];
              } else {
                if (track[i][j+1] === 'X') {areWeThereYet = true;}
                track[i][j+1] = 'O';
                car[1]++;
              }
              fuel--;
            }
            if (areWeThereYet || !fuel) {break out;}
          }
        }
      }
      return track;
      // return {'Last Position': track, 'Finished?': areWeThereYet, 'Fuel Left': fuel};

}

var track1 = [
  [' ', ' ', 'O', ' '],
  [' ', ' ', 'X', ' ']
]

console.log(howFarCanIGo(track1, 9))
/**
 *  [
 *   [' ', ' ', ' ', ' '],
 *   [ ' ', ' ', 'O', '']
 * ]
 */

var track2 = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'O', ' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ']
]
console.log(howFarCanIGo(track2, 12))
/**
 *  [
 *  [' ', ' ', ' ', ' '],
 *  [' ', ' ', 'O', ' ']
 * ]
 */

// [
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' '],
//   [' ', ' ', ' ', ' ', ' ', 'O', ' ', 'X', ' ']
// ]