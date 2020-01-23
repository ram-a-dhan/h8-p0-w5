/**
 * ===================
 * What should I ride
 * ===================
 *
 * Angkot merupakan salah satu angkutan umum yang sangat populer di Indonesia, dan setiap angkot memiliki rutenya masing masing.
 * Bayangkan kalian ingin berpergian dari tempat anda berada sampai tujuan anda.
 *  Buatlah sebuah fungsi yang akan menampilkan angkot mana saja yang harus kita naikin untuk mencapai tujuan kita
 *  dan jarak yang kita tempuh untuk mencapai tujuan.
 *
 * Fungsi ini akan menerima dua parameter:
 * - angkot -> list angkot yang tersedia
 * - source -> tujuan awal dari pengguna
 * - destination -> tujuan akhir dari pengguna
 *
 * Asumsi:
 * - Tidak ada angkot yang memiliki rute tujuan yang sama
 *
 * Contoh angkot
 * var angkot = [
 *   {
 *     name: 'Angkot 01',
 *     from: 'Pondok Indah',
 *     to: 'Gandaria City',
 *     distance: 100
 *   },
 *   {
 *     name: 'Angkot 02',
 *     from: 'Gandaria City',
 *     to: 'Palmerah',
 *     distance: 200
 *   },
 *   {
 *     name: 'Angkot 03',
 *     from: 'Palmerah',
 *     to: 'Sudirman',
 *     distance: 300
 *   },
 *   {
 *     name: 'Angkot 04',
 *     from: 'Sudirman',
 *     to: 'Manggarai',
 *     distance: 400
 *   },
 *   {
 *     name: 'Angkot 05',
 *     from: 'Manggarai',
 *     to: 'Bekasi',
 *     distance: 10000
 *   }
 * ]
 *
 * findRoute(angkot, 'Pondok Indah', 'Gandaria City')
 *
 * Input
 * {
 *  distance: 100,
 *  routes: [
 *     {
 *      name: 'Angkot 01',
 *      from: 'Pondok Indah',
 *      to: 'Gandaria City',
 *      distance: 100
 *     },
 *   ]
 * }
 *
 */

function findRoute(angkot, source, destination) {
  // Where happiness starts

  var transit = {
    distance: 0,
    routes: [],
  };
  var position = source;
  
  for (x = 0; x < angkot.length; x++) {
    if (angkot[x].from === position) {
      var i = x;
      break;
    }
  }
  
  while (position !== destination) {
    transit.routes.push(angkot[i]);
    transit.distance += angkot[i].distance;
    position = angkot[i].to;
    i++;
  }
  return transit;

}

var angkot = [
  {
    name: 'Angkot 01',
    from: 'Pondok Indah',
    to: 'Gandaria City',
    distance: 100
  },
  {
    name: 'Angkot 02',
    from: 'Gandaria City',
    to: 'Palmerah',
    distance: 200
  },
  {
    name: 'Angkot 03',
    from: 'Palmerah',
    to: 'Sudirman',
    distance: 300
  },
  {
    name: 'Angkot 04',
    from: 'Sudirman',
    to: 'Manggarai',
    distance: 400
  },
  {
    name: 'Angkot 05',
    from: 'Manggarai',
    to: 'Bekasi',
    distance: 10000
  }
]

console.log(findRoute(angkot, 'Pondok Indah', 'Gandaria City'))
// {
//   distance: 100,
//   routes: [
//     {
//       name: 'Angkot 01',
//       from: 'Pondok Indah',
//       to: 'Gandaria City',
//       distance: 100
//     }
//   ]
// }

console.log(findRoute(angkot, 'Palmerah', 'Manggarai'))

// {
//   distance: 700,
//   routes: [
//     {
//       name: 'Angkot 03',
//       from: 'Palmerah',
//       to: 'Sudirman',
//       distance: 300
//     },
//     {
//       name: 'Angkot 04',
//       from: 'Sudirman',
//       to: 'Manggarai',
//       distance: 400
//     }
//   ]
// }

console.log(findRoute(angkot, 'Pondok Indah', 'Bekasi'))
//  {
//   distance: 11000,
//   routes: [
//     {
//       name: 'Angkot 01',
//       from: 'Pondok Indah',
//       to: 'Gandaria City',
//       distance: 100
//     },
//     {
//       name: 'Angkot 02',
//       from: 'Gandaria City',
//       to: 'Palmerah',
//       distance: 200
//     },
//     {
//       name: 'Angkot 03',
//       from: 'Palmerah',
//       to: 'Sudirman',
//       distance: 300
//     },
//     {
//       name: 'Angkot 04',
//       from: 'Sudirman',
//       to: 'Manggarai',
//       distance: 400
//     },
//     {
//       name: 'Angkot 05',
//       from: 'Manggarai',
//       to: 'Bekasi',
//       distance: 10000
//     }
//   ]
// }
