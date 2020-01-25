/**
 * Instruktur Adiel perlu bantuanmu mengsortir student yang lulus dan gagal.
 *
 * Berikut adalah pembagian nilai:
 * 90 ~ 100 : A
 * 70 ~ 89 : B
 * 60 ~ 69 : C
 * 0 ~ 59 : D
 *
 * Berikut kumpulan semua ragam kelas:
 * - Math
 * - Bio
 * - Chem
 * - Phys
 * - Eng
 *
 * 1. Buatlah converter untuk mengubah masing" nilai menjadi huruf,
 * 2. Carilah huruf terbanyak
 * 3. Group sebagai berikut:
 *   A: Excellent
 *   B: Great
 *   C: Good
 *   D: Fail
 * 4. Kembalikan object yang isinya nama murid tersortir
 *
 *
 *
 * EXAMPLE:
 * 1. var scores = {
 *   Ayu: {
 *      Math: 100
 *      Bio: 85
 *      Chem: 88
 *      Phys: 100
 *      Eng: 90
 *   },
 *   Semmi: {
 *      Math: 80
 *      Bio: 65
 *      Chem: 68
 *      Phys: 61
 *      Eng: 40
 *   },
 *   Audrick: {
 *      Math: 60
 *      Bio: 55
 *      Chem: 58
 *      Phys: 100
 *      Eng: 50
 *   }
 * }
 * result: { A: [ 'Ayu' ], B: [], C: [ 'Semmi', 'Audrick' ], D: [] }
 * 
 */
function sortStudents(list) {
  // code goes here

  var avg = [];
  var person = 0;
  for (i in list) {
    avg.push([i, 0]);
    var subject = 0;
    for (j in list[i]) {
      // console.log(list[i][j]);
      avg[person][1] += list[i][j];
      subject++;
    }
    // console.log(avg[person], subject);
    avg[person][1] /= subject;
    person++;
  }
  // return avg;

  for (i = 0; i < avg.length; i++) {
    // console.log(avg[i]);
    switch (true) {
      case (avg[i][1] >= 90 && avg[i][1] <= 100):
        avg[i].push('A');
        break;
      case (avg[i][1] >= 70 && avg[i][1] <   90):
        avg[i].push('B');
        break;
      case (avg[i][1] >= 60 && avg[i][1] <   70):
        avg[i].push('C');
        break;
      case (avg[i][1] >=  0 && avg[i][1] <   60):
        avg[i].push('D');
        break;
    }
  }
  // return avg;

  var statistics = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  for (i = 0; i < avg.length; i++) {
    for (j in statistics) {
      if (avg[i][2] === j) {
        statistics[j].push(avg[i][0]);
      }
    }
  }
  return statistics;

}
var score = {
  Fadhlan: { 
    Math: 90, Bio: 88, Chem: 70, Phys: 95, Eng: 100
  },
  Aziz: {
    Math: 85, Bio: 90, Chem: 100, Phys: 85, Eng: 90
  },
  Gabriel: {
    Math: 70, Bio: 69, Chem: 50, Phys: 60, Eng: 65
  },
  Brahma: {
    Math: 60, Bio: 60, Chem: 50, Phys: 25, Eng: 45
  }
};
console.log(sortStudents(score));
// { A: [ 'Aziz' ], B: [ 'Fadhlan' ], C: [ 'Gabriel' ], D: [ 'Brahma' ] }
var score2 = {
  Ayu: { 
    Math: 100, Bio: 85, Chem: 88, Phys: 100, Eng: 90,
  },
  Semmi: { 
    Math: 80, Bio: 65, Chem: 68, Phys: 61, Eng: 40
  },
  Audrick: { 
    Math: 60, Bio: 55, Chem: 58, Phys: 100, Eng: 50
  }
}
console.log(sortStudents(score2));
// { A: [ 'Ayu' ], B: [], C: [ 'Semmi', 'Audrick' ], D: [] }

