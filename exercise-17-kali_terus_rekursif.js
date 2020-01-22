function kaliTerusRekursif(angka) {
    
    // if (angka < 10) {
    //     // console.log(angka.toString());
    //     return angka;
    // }
    // // console.log((angka%10).toString());
    // var kaliTerooos = (angka % 10) * kaliTerusRekursif(Math.floor(angka/10));
    // // console.log(kaliTerooos.toString());
    // return kaliTerusRekursif(kaliTerooos);

    return angka < 10 ? angka : kaliTerusRekursif((angka % 10) * kaliTerusRekursif(Math.floor(angka/10)));

}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6