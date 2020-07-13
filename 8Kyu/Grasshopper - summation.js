/*
https://www.codewars.com/kata/55d24f55d7dd296eb9000030

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    var sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}