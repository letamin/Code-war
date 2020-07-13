/*
https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
*/

function arrayMadness(a, b) {
    var sumA = 0, sumB = 0;
    for (let i = 0; i < a.length; i++) {
        sumA += a[i] * a[i];
    }

    for (let i = 0; i < b.length; i++) {
        sumB += b[i] * b[i] * b[i];
    }

    return sumA > sumB
}

//#2
function arrayMadness(a, b) {
    return (a.reduce((sum, index) => sum + index * index, 0) > b.reduce((sum, index) => sum + index * index * index, 0))
}