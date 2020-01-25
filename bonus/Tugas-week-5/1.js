/**
 * 
 * # Logic Challenge - Tukar Hadiah
## Objectives
- Mampu mengakses array of object
- Mampu membuat array of object
- Looping array of object
## Directions
Anda akan membuat program penukaran hadiah di Timezone. Anda akan diberikan array berisi pemain di Timezone yang memiliki nama dan jumlah poin
yang akan mereka tukarkan menjadi hadiah. 
Tiap pemain harus mengantri mengikuti urutan mereka di dalam array, dan tiap pemain akan terus menukarkan poin dengan barang sampai poin mereka habis atau tidak
bisa dipakai untuk menukar lagi.
Di dalam function terdapat array-of-object yang berisi barang-barang apa saja yang bisa ditukarkan beserta berapa poin yang dibutuhkan untuk menukar 1 buah barang tersebut beserta dengan jumlah stok barang tersebut. 
Object barang berbentuk seperti ini:
```JavaScript
{name: 'bola', harga: 100, stock: 5}
```
Barang `bola` memiliki harga per barang 100 poin, dan masih ada 5 biji stok barang tersebut.
Beginilah cara pemain menukar hadiah:
- Pemain akan memprioritaskan untuk menukar barang yang paling mahal terlebih dahulu
- Jika sisa poin masih melebihi harga barang, namun stok barang tersebut sudah habis, maka lanjut ke barang berikutnya. 
- Jika tidak ada barang yang bisa ditukar oleh seorang pemain dengan sisa poinnya atau jika stock barang yang bisa dia tukar sudah habis, maka lanjut ke pemain berikutnya.
 
 Program ini akan mengoutput array-of-objects dimana tiap objet di dalam aray akan berisi nama, barang yang dia beli (dalam array), dan sisa poinnya.
 
 Contoh Flow program:
 Input: 
 ```JavaScript
 let players = [{name: "Adiel", points:500},{name: "Ricky",  points: 1000}]
 let listItem = [
    {name: "Teddy Bear", harga: 1000, stock:1},
    {name: "Toy Soldier", harga: 200, stock: 5},
    {name: "Ducky", harga: 500, stock: 3},
    {name: "Bunny", harga: 300, stock: 2},
    {name: "Buzz Lightyear", harga: 2000, stock: 1}]
 ```
 
 Proses:
 1. Adiel dengan poin 500 tidak bisa membeli "Buzz Lightyear" dan "Teddy Bear". 
 2. Adiel bisa membeli Ducky, sehingga tambahkan Ducky ke dalam array barang yang ditukar Adiel dan kurangi poin Adiel dengan harga barang yang ditukar
 3. Karena sisa poin Adiel sudah habis, lanjut ke Ricky
 4. Ricky bisa membeli 'Teddy Bear', tambahkan Teddy Bear ke dalam array barang yang ditukar Ricky dan kurangi poin Ricky dengan harga barang yang ditukar
 5. Output hasil berupa Array of objects berisi nama, barang yang ditukar, beserta sisa poinnya
 
 Output: 
 ```JavaScript
 [
  { name: 'Adiel', items: [ 'Ducky' ], points: 0 },
  { name: 'Ricky', items: [ 'Teddy Bear' ], points: 0 }
 ]
 ```
 * 
 */
 
function exchangeScore(players) { 
  var listItem = [
    {name: "Teddy Bear", harga: 1000, stock:1},
    {name: "Toy Soldier", harga: 200, stock: 5},
    {name: "Ducky", harga: 500, stock: 3},
    {name: "Bunny", harga: 300, stock: 2},
    {name: "Buzz Lightyear", harga: 2000, stock: 1},
  ];

  var tmp;
  for (i = 0; i < listItem.length-1; i++) {
      for (j = 0; j < listItem.length-1-i; j++) {
          if (listItem[j].harga < listItem[j+1].harga) {
              tmp = listItem[j];
              listItem[j] = listItem[j+1];
              listItem[j+1] = tmp;
          }
      }
  }
  // return listItem;

  var result = [];
  for (i = 0; i < players.length; i++) {
    
    result.push({
      name: players[i].name,
      items: [],
      points: players[i].points,
    });
    
    // var failsafe = 0;
    while (result[i].points >= listItem[listItem.length-1].harga && listItem[listItem.length-1].stock > 0) {
      for (j = 0; j < listItem.length; j++) {
        if (result[i].points >= listItem[j].harga && listItem[j].stock > 0) {
          result[i].points -= listItem[j].harga;
          result[i].items.push(listItem[j].name);
          listItem[j].stock--;
        }
      }
      // failsafe++;
      // if (failsafe === 50) {break;} // Kalau dapat infinite loop laptop saya langsung nge-hang
    }
  }
  return result;

}
 
 console.log(exchangeScore([
   {name: "Yanto Kopling", points:100}, {name: "Audric", points: 300}, {name: "Ayu", points: 1000}, {name: "Semmi", points:1000}, {name: "Mahdi", points: 2000}, 
   {name: "Sofyan", points: 2000}
 ]));
 /**
  * Output:
  * [
   { name: 'Yanto Kopling', items: [], points: 100 },
   { name: 'Audric', items: [ 'Bunny' ], points: 0 },
   { name: 'Ayu', items: [ 'Teddy Bear' ], points: 0 },
   {
     name: 'Semmi',
     items: [ 'Ducky', 'Bunny', 'Toy Soldier' ],
     points: 0
   },
   { name: 'Mahdi', items: [ 'Buzz Lightyear' ], points: 0 },
   {
     name: 'Sofyan',
     items: [
       'Ducky',
       'Toy Soldier',
       'Ducky',
       'Toy Soldier',
       'Toy Soldier',
       'Toy Soldier'
     ],
     points: 200
   }
 ]
  * 
  */
 
 console.log(exchangeScore([{name: "Yanto Kopling", points:250}, {name: "Fakhri", points: 400}, {name: "Habibie", points: 600}]));
 /**
  * Output: 
   [
   { name: 'Yanto Kopling', items: [ 'Toy Soldier' ], points: 50 },
   { name: 'Fakhri', items: [ 'Bunny' ], points: 100 },
   { name: 'Habibie', items: [ 'Ducky' ], points: 100 }
   ]
  */
 
 console.log(exchangeScore([])); //Output: []