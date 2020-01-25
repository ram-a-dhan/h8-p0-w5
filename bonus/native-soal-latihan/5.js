/**
 * GROUP BY GENUS
 * 
 * Function groupByGenus menerima input berupa array-of-strings yang merupakan kumpulan spesies,
 * setiap spesies memiliki genus (kata pertama dari spesies tsb). 
 * Function ini akan mengelompokkan spesies berdasarkan genusnya dan menyingkat nama genusnya 
 * 
 * Input :
 * [
 *  'Lactobacillus casei',
 *  'Staphylococcus epidermidis',
 *  'Streptococcus mutans',
 *  'Lactobacillus salivarius'
 * ]
 * 
 * 
 * Output : 
 * {
 *  Lactobacillus: [ 'L. casei', 'L. salivarius' ],
 *  Staphylococcus: [ 'S. epidermidis' ],
 *  Streptococcus: [ 'S. mutans' ]
 * }
 * 
 * 
 * RULES 
 * 1. TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
 * 
 */
function groupByGenus(list) {
  
  var parsedList = [];
  for (i = 0; i < list.length; i++) {
    var tmpArr = [], tmpStr = '';
    for (j = 0; j <= list[i].length; j++) {
      if (list[i][j] === ' ' || j === list[i].length) {
        tmpArr.push(tmpStr);
        tmpStr = '';
      } else {
        tmpStr += list[i][j];
      }
    }
    parsedList.push(tmpArr);
  }
  // return parsedList;

  var genusList = {};
  for (i = 0; i < parsedList.length; i++) {
    var alreadyInList = false;
    for (j in genusList) {
      if (parsedList[i][0] === j) {
        alreadyInList = true;
        genusList[j].push(parsedList[i][0][0] + '. ' + parsedList[i][1]);
      }
    }
    if (!alreadyInList) {
      genusList[parsedList[i][0]] = [parsedList[i][0][0] + '. ' + parsedList[i][1]]; 
    }
  }
  return genusList;

}
console.log(groupByGenus([
    'Lactobacillus casei',
    'Staphylococcus epidermidis',
    'Streptococcus mutans',
    'Lactobacillus salivarius'
]))
/**
 * {
 *  Lactobacillus: [ 'L. casei', 'L. salivarius' ],
 *  Staphylococcus: [ 'S. epidermidis' ],
 *  Streptococcus: [ 'S. mutans' ]
 * }
 */
 console.log(groupByGenus([
     'Vulpes chama',
     'Felis chaus',
     'Felis bieti',
     'Vulpes velox',
     'Canis lupus',
     'Canis simenis',
     'Vulpes zerda',
     'Giraffe camelopardalis',
     'Vulpes ferrilata'
 ]))
/**
 * {
 * Vulpes: [ 'V. chama', 'V. velox', 'V. zerda', 'V. ferrilata' ],
 * Felis: [ 'F. chaus', 'F. bieti' ],
 * Canis: [ 'C. lupus', 'C. simenis' ],
 * Giraffe: [ 'G. camelopardalis' ]
 * }
 * 
 */