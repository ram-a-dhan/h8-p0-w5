/**
 * Buatlah sebuah function yang akan mengambil input berupa array multidimensi berisi kumpulan angka.
 * Function akan mencari nilai mean, modus, max dari masing-masing array di dalam array multidimensi tersebut.
 * Masing-masing mean, modus, dan max dari array-array tersebut akan disimpan di dalam 1 array.
 * 
 * Jika terdapat 2 modus di dalam 1 array, maka modus di array tersebut adalah modus yang terkecil!!!
 * 
 * contoh input: [[1,2,3,4], [5,6,5,7]]
 * contoh output:[[mean, modus, max], [mean,modus,max]]
 *               [ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

function findSpecials(array) {
    // your code here
    var resultArray = [];
    var mean = [], modus = [], max = [];

    //// MEAN
    for (i = 0; i < array.length; i++) {
        mean[i] = 0;
        for (j = 0; j < array[i].length; j++) {
            mean[i] += array[i][j];
        }
        mean[i] /= array[i].length;
    }
    // return mean;
    ////

    //// MODUS
    for (i = 0; i < array.length; i++) {
        var list = [];
        for (j = 0; j < array[i].length; j++) {
            var alreadyInList = false;
            for (k = 0; k < list.length; k++) {
                if (array[i][j] === list[k][0]) {
                    alreadyInList = true;
                    list[k][1]++;
                }
            }
            if (!alreadyInList) {
                list.push([array[i][j], 1]);
            }
        }
        // console.log(list);
        
        var temp;
        for (l = 0; l < list.length-1; l++) {
            for (m = 0; m < list.length-1-l; m++) {
                if (list[m][1] < list[m+1][1] && list[m][0] > list[m+1][0]) {
                    temp = list[m];
                    list[m] = list[m+1];
                    list[m+1] = temp;
                }
            }
        }
        // console.log(list);
        modus.push(list[0][0]);
    }
    // return modus;
    ////

    //// MAX
    for (i = 0; i < array.length; i++) {
        var tmp;
        for (j = 0; j < array[i].length-1; j++) {
            for (k = 0; k < array[i].length-1-j; k++) {
                if (array[i][k] < array[i][k+1]) {
                    tmp = array[i][k];
                    array[i][k] = array[i][k+1];
                    array[i][k+1] = tmp;
                }
            }
        }
        max.push(array[i][0]);
    }
    // return max;
    ////

    //// RESULT
    for (i = 0; i < array.length; i++) {
        resultArray.push([mean[i],modus[i],max[i]]);
    }
    return resultArray;
    ////
}


//test-cases
console.log(findSpecials([[2,2,2,4,5,6,8,9],[2,2,2,0,9],[3,4,5,8,8,8,3,3,2,10]]));
//[ [ 4.75, 2, 9 ], [ 3, 2, 9 ], [ 5.4, 3, 10 ] ]

console.log(findSpecials([[1,2,3,4], [5,6,5,7]]))
//[ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]