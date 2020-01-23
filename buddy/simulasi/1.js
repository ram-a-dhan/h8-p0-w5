/**
 * ==============
 * Find the value of Y
 * ==================
 *
 * Mungkin kalian ingat persamaan linear seperti ini y = 2x + 3
 *
 * Tugas kalian adalah membuat sebuah fungsi yang akan mengembalikan nilai dari Y, fungsi ini akan menerima dua input:
 * - String yang merupakan persamaan yang ingin kita cari.
 * - Angka yang akan menggantikan variable x di dalam persamaan yang kita punya
 *
 * Contoh fungsi:
 *
 * Input
 * findTheY('2x+3', 2)
 *
 * Proses
 * 2 x (2) + 3
 *
 * Output
 * 7
 */

function findTheY(linearEquation, xValue) {
  // Insert your code here

  var eq = [], tmpStr = '';
  for (i = 0; i <= linearEquation.length; i++) {
    if (linearEquation[i] === '+' || i === linearEquation.length) {
      eq.push(tmpStr);
      tmpStr = '';
    } else {
      tmpStr += linearEquation[i];
    }
  }
  // return eq;
  
  var num = 0;
  for (i = 0; i < eq.length; i++) {
    var tmpNum = '';
    for (j = 0; j <= eq[i].length; j++) {
      if (eq[i][j] === 'x') {
        tmpNum = Number(tmpNum) * xValue;
      } else if (j === eq[i].length) {
        tmpNum = Number(tmpNum);
      } else {
        tmpNum += eq[i][j];
      }
    }
    // console.log(tmpNum.toString());
    num += tmpNum;
  }
  return num;

}

console.log(findTheY('2x+3', 2)) // 7
console.log(findTheY('2x+3x', 3)) // 15
console.log(findTheY('3x', 5)) // 15
