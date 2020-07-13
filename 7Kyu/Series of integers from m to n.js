/*
https://www.codewars.com/kata/5841f680c5c9b092950001ae

generateIntegers(2, 5) // --> [2, 3, 4, 5]
*/

function generateIntegers(m, n) {
    var array = [];
    for (let i = m; i <= n; i++) {
        array.push(i);
    }
    return array;
}