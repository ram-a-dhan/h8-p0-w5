/**
 *  =======================
 *  RAZIA GANJIL GENAP
 *  =======================
 *
 * [Description]
 * Sebuah fungsi yang akan mengembalikan pemberitahuan kemungkinan tindak pelanggaran
 * jika pengemudi melalui rute-rute tertentu dengan plat ganjil-genap. Pelanggaran akan terjadi apabila
 * ada plat mobil yang melintas pada rute tertentu pada tanggal tertentu dengan nomor plat
 * yang tidak sama dengan aturan ganjil genap
 *
 * [Instructions]
 * 1. Function menerima parameter berupa tanggal, data kendaraan
 * 2. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut)
 * 3. Contoh membaca nomor plat kendaraan adalah misal B 444 XXX, berarti yang dilihat cukup
 * angka paling belakang dari 444 berarti 4, berati nomor plat mobil ini termasuk genap
 * 5. Berlaku hanya untuk MOBIL.
 * 6. Lokasi Ganjil Genap
 *   - Gajah Mada
 *   - Hayam Wuruk
 *   - Sisingamangaraja
 *   - Panglima Polim
 *   - Fatmawati
 *   - Tomang Raya
 *
 * [Rules]
 * 1. tidak boleh menggunakan built in function .filter(), .map(), .reduce(), .includes(), .indexOf()
 */
function kenaRazia(date, data) {
  //code goes here
  var lokasi = [
    'Gajah Mada',
    'Hayam Wuruk',
    'Sisingamangaraja',
    'Panglima Polim',
    'Fatmawati',
    'Tomang Raya',
  ];
  // return lokasi;
  
  var daftarTilang = [];
  for (i = 0; i < data.length; i++) {

    if (data[i].type !== 'Mobil') {continue;}
    
    var platArr = [], tmpStr = '';
    for (x = 0; x <= data[i].plat.length; x++) {
      if (data[i].plat[x] === ' ' || x === data[i].plat.length) {
        platArr.push(tmpStr);
        tmpStr = '';
      } else {
        tmpStr += data[i].plat[x];
      }
    }
    var platGenap = platArr[1] % 2 === 0 ? true : false;
    var tglGenap = date % 2 === 0 ? true : false;
    console.log([tglGenap, platGenap]);
    
    if (platGenap === tglGenap) {continue;}
    
    var kenaTilang = 0;
    for (j = 0; j < data[i].rute.length; j++) {
      for (k = 0; k < lokasi.length; k++) {
        if (data[i].rute[j] === lokasi[k]) {
          kenaTilang++;
        }
      }
    }
    if (kenaTilang) {
      daftarTilang.push({
        name: data[i].name,
        tilang: kenaTilang,
      });
    }
  }
  return daftarTilang;

}
console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang"
      ]
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada"
      ]
    }
  ])
);
// [ { name: ‘Toni’, tilang: 1 }, { name: ‘Anna’, tilang: 3 } ]
