/**
 * ==============
 * Movie Database
 * ==============
 * 
 * Instruction
 * -----------
 * findMovie adalah sebuah function yang mengelompokkan data film dari input yang diberikan
 * berdasarkan tahun film itu dibuat.
 * 
 * Restrictions
 * ------------
 * 1. input berupa array multidimensional yang setiap entri-nya merupakan sebuah array
 *    dengan format [<nama film>, <Tanggal rilis>, <genre>]
 * 2. Output berupa object dengan key tahun rilis dari masing-masing film
 *    dengan value berupa array of objects dengan format:
 *    { <date (tanggal dan bulan)>, <title>, <genre> }
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice
 */
function findMovie(arrMovie) {

  var arrDates = [];
  for (i = 0; i < arrMovie.length; i++) {
    var tmpArr = [], tmpStr = '';
    for (j = 0; j <= arrMovie[i][1].length; j++) {
      if (arrMovie[i][1][j] === ' ' || j === arrMovie[i][1].length) {
          tmpArr.push(tmpStr);
          tmpStr = '';
      } else {
          tmpStr += arrMovie[i][1][j];
      }
    }
    arrDates.push(tmpArr);
    // tmpArr = [];
  }
  // return arrDates;

  // var moviesYearly = {};
  // for (k = 0; k < arrMovie.length; k++) {
  //   var alreadyInList = false;
  //   for (l in moviesYearly) {
  //       if (arrDates[k][2] === l) {
  //         alreadyInList = true;
  //         moviesYearly[arrDates[k][2]].push({
  //           date: arrDates[k][0] + ' ' + arrDates[k][1],
  //           title: arrMovie[k][0],
  //           genre: arrMovie[k][2],
  //         });
  //       }
  //   }
  //   if (!alreadyInList) {
  //     moviesYearly[arrDates[k][2]] = [{
  //       date: arrDates[k][0] + ' ' + arrDates[k][1],
  //       title: arrMovie[k][0],
  //       genre: arrMovie[k][2],
  //     }]; 
  //   }
  // }
  // return moviesYearly;

  // var moviesMonthly = {}
  // for (k = 0; k < arrMovie.length; k++) {
  //   if (moviesMonthly.hasOwnProperty(arrDates[k][1])) {
  //       moviesMonthly[arrDates[k][1]].push({
  //         year: arrDates[k][2],
  //         title: arrMovie[k][0],
  //         genre: arrMovie[k][2],
  //       });
  //   } else {
  //     moviesMonthly[arrDates[k][1]] = [{
  //       year: arrDates[k][2],
  //       title: arrMovie[k][0],
  //       genre: arrMovie[k][2],
  //     }];
  //   }
  // }
  // return moviesMonthly;

  var moviesByGenre = {};
  for (k = 0; k < arrMovie.length; k++) {
    if (moviesByGenre.hasOwnProperty(arrMovie[k][2])) {
        moviesByGenre[arrMovie[k][2]].push({
          title: arrMovie[k][0],
          date: arrMovie[k][1],
        });
    } else {
      moviesByGenre[arrMovie[k][2]] = [{
        title: arrMovie[k][0],
        year: arrMovie[k][1],
      }];
    }
  }
  return moviesByGenre;

}
var movie1 = [
  ["Suicide Squad", "3 May 2016", "Action"],
  ["Interstellar", "6 June 2018", "Sci-Fi"],
  ["La La Land", "24 June 2018", "Romatic"],
  ["Fast Furious", "2 January 2019", "Action"],
  ["IT", "7 January 2019", "Horror"],
  ["Justice League", "14 April 2019", "Action"],
  ["Lion King", "20 July 2019", "Animation"]
]
console.log(findMovie(movie1));
/*
{
  2016: [
    { date: "3 May", title: "Suicide Squad", genre: "Action" }
  ],
  2018: [
    { date: "6 June", title: "Interstellar", genre: "Sci-Fi" },
    { date: "24 June", title: "La La Land", genre: "Romantic" }
  ],
  2019: [
    { date: "2 January", title: "Fast Furious", genre: "Action" },
    { date: "7 January", title: "IT", genre: "Horror" },
    { date: "14 April", title: "Justice League", genre: "Action" },
    { date: "20 July", title: "Lion King", genre: "Animation" }
  ]
}
*/
var movie2 = [
  ["Joker", "4 October 2019", "Thriller"],
  ["Parasite", "24 June 2019", "Drama"],
  ["Into the Spider-verse", "14 December 2018", "Animation"],
  ["Avengers: Infinity War", "27 April 2018", "Action"],
  ["Avengers: Endgame", "26 April 2019 ", "Action"],
  ["Coco", "22 November 2017", "Animation"],
  ["Your Name", "7 April 2017", "Animation"]
]
console.log(findMovie(movie2));
// console.log(findMovie(movie2))
// {
//   '2017': [
//     { date: '22 November', title: 'Coco', genre: 'Animation' },
//     { date: '7 April', title: 'Your Name', genre: 'Animation' }
//   ],
//   '2018': [
//     { date: '14 December', title: 'Into the Spider-verse', genre: 'Animation' },
//     { date: '27 April', title: 'Avengers: Infinity War', genre: 'Action' }
//   ],
//   '2019': [
//     { date: '4 October', title: 'Joker', genre: 'Thriller' },
//     { date: '24 June', title: 'Parasite', genre: 'Drama' },
//     { date: '26 April', title: 'Avengers: Endgame', genre: 'Action' }
//   ]
// }
