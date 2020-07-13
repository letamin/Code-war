/*
https://www.codewars.com/kata/593c9175933500f33400003e

multiples(3, 5.0) => [5.0, 10.0, 15.0]
*/

function multiples(m, n) {
    var array = [];
    for (let i = 0; i < m; i++) {
        array[i] = n * (i + 1);
    }
    return array;
}