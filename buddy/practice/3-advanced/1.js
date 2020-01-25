/**
 * Toko Fox ingin membuat sistem yang memonitor stock dan menampilkan stock yang tersisa.
 * Jika si pembeli ingin membeli barang yang tidak ada di daftar stock Toko Fox atau pembelian melebihi stock Toko Fox,
 * maka dianggap, si pembeli tidak jadi beli barang tersebut.
 * Selain itu, kami juga ingin menampilkan total revenue yang telah diperoleh si Toko Fox.
 *
 * NOTE:
 * FORMAT STOCK: [nama, stock, harga satuan]
 * FORMAT ORDER: [nama, jumlah pembelian]
 *
 * EXAMPLE:
 * 1.
 * var stock = [
 *   ["Beras", 7, 8000],
 *   ["Ayam", 2, 32000],
 *   ["Susu", 2, 22000]
 * ]
 *
 * var order = [
 *   ["Ayam", 1],
 *   ["Bola", 1],
 *   ["Susu", 1]
 * ]
 *
 * result = {
 *   stock: [
 *     ["Beras", 7, 8000],
 *     ["Ayam", 1, 32000],
 *     ["Susu", 1, 22000]
 *   ]
 *   revenue: 54000
 * }
 *
 * 2.
 *
 * var stock = [
 *   ["Udang", 2, 40000],
 *   ["Susu", 1, 22000]
 * ]
 *
 * var order = []
 *
 * result = "maaf, anda harus membeli"
 *
 * RULES:
 * TIDAK BOLEH MENGGUNAKAN BUILT-IN FUNCTIONS .indexOf, .findIndex, .forEach, .includes, Set
 * HARUS MENULISKAN PSEUDOCODE
 *
 */

function getData(pembelian, stock) {
  // code goes here
  
  var kasir = 0;
  for (i = 0; i < pembelian.length; i++) {
    for (j = 0; j < stock.length; j++) {
      if (pembelian[i][0] === stock[j][0] && pembelian[i][1] <= stock[j][1]) {
        stock[j][1] -= pembelian[i][1];
        kasir += stock[j][2] * pembelian[i][1];
      }
    }
  }
  
  var stockpile = {
    stock: stock,
    revenue: kasir,
  };

  return stockpile;

}

var order = [
  ["Air", 2],
  ["Kelapa", 1],
  ["Apel", 3]
];

var stock = [
  ["Kelapa", 7, 12000],
  ["Ayam", 2, 14000],
  ["Apel", 7, 6000]
];

console.log(getData(order, stock));
/**
 * {
 *   stock: [
 *     ["Kelapa", 6, 12000],
 *     ["Ayam", 2, 14000],
 *     ["Apel", 4, 6000]
 *   ],
 *   revenue: 30000
 * }
 */

var order2 = [
  ["Kambing", 2],
  ["Jagung", 2],
  ["Jeruk", 1]
];

var stock2 = [
  ["Kambing", 1, 12000],
  ["Jeruk", 1, 6000],
  ["Anggur", 1, 8000]
];

console.log(getData(order2, stock2));
/**
 * {
 *  stock: [
 *    ["Kambing", 1, 12000],
 *    ["Jeruk", 0, 6000],
 *    ["Anggur", 1, 8000]
 *  ],
 *  revenue: 6000
 * }
 */
