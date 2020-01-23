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

  var operator = [], x;
  if (linearEquation[0] === '-') {
    operator.push('-');
    x = 1;
  } else {
    operator.push('+');
    x = 0;
  }

  var operand = [], tmpStr = '';
  for (i = x; i <= linearEquation.length; i++) {
    if (linearEquation[i] === '+' || linearEquation[i] === '-' || i === linearEquation.length) {
      if (linearEquation[i] === '+' || linearEquation[i] === '-') {
        operator.push(linearEquation[i]);
        // console.log(operator);
      }
      operand.push(tmpStr);
      tmpStr = '';
    } else {
      tmpStr += linearEquation[i];
    }
  }
  // return operator;
  // return operand;
  
  var num = 0;
  for (i = 0; i < operand.length; i++) {
    var tmpNum = '';
    for (j = 0; j <= operand[i].length; j++) {
      if (operand[i][j] === 'x') {
        tmpNum = Number(tmpNum) * xValue;
      } else if (j === operand[i].length) {
        tmpNum = Number(tmpNum);
      } else {
        tmpNum += operand[i][j];
      }
    }
    if (operator[i] === '-') {tmpNum *= -1;}
    // console.log(tmpNum.toString());
    num += tmpNum;
  }
  return num;

}

console.log(findTheY('2x+3', 2)) // 7
console.log(findTheY('2x+3x', 3)) // 15
console.log(findTheY('3x', 5)) // 15

console.log(findTheY('2x-3', 2)) // 1
console.log(findTheY('2x-3x', 3)) // -3
console.log(findTheY('-3x', 5)) // -15
