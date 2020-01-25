// **Left Rotation array**
// Buatlah sebuah fungsi yang menerima dua parameter. Parameter pertama adalah `array` yang akan kita manipulasi dan parameter kedua adalah `angka` berapa kali kita akan melakukan rotasi. Fungsi ini akan menggeser ke kiri posisi dari array sebanyak `angka` putaran yang kita kirimkan. 
// Contoh dengan array `[0, 1, 2, 3, 4, 5]` rotasi sebanyak `2` kali
// Rotasi pertama -> [1, 2, 3, 4, 5, 0]
// Rotasi kedua -> [2, 3, 4, 5, 0, 1]
function leftRotation(array, count) {
  
  for (i = 0; i < count; i++) {
    array.push(array[0]);
    array.shift();
  }
  return array;
  
}
console.log(leftRotation([0, 1, 2, 3, 4, 5], 1)) // [ 1, 2, 3, 4, 5, 0]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 2)) // [ 2, 3, 4, 5, 0, 1 ]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 3)) // [ 3, 4, 5, 0, 1, 2 ]