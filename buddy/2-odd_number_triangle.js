function oddNumberTriangle(size) {

    if (size < 1) {return 'Invalid input!';}

    var counter = 1;
    var triangle = [];
    for (i = 1; i <= size; i++) {
        var tempArray = [];
        for (j = 1; j <= i; j++) {
            tempArray.push(counter);
            counter += 2;
        }
        triangle.push(tempArray);
    }
    return triangle;
}

// console.log(oddNumberTriangle(5));
// console.log();

// console.log(oddNumberTriangle(6));
// console.log();

function oddNumberTriangleSum(sizeOfTriangle, lineToSum) {

    var triangle = oddNumberTriangle(sizeOfTriangle);
    console.log(triangle);

    // var sum = 0;
    // for (i = 0; i < triangle[lineToSum-1].length; i++) {
    //     sum += triangle[lineToSum-1][i];
    // }
    // return sum;
    return lineToSum ** 3
}

console.log(oddNumberTriangleSum(3,3));
console.log();

console.log(oddNumberTriangleSum(6,4));
console.log();
