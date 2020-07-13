/*
https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

5! = 5 * 4 * 3 * 2 * 1 = 120.
*/

function factorial(n) {
    var result = 1;
    if (n == 0) return 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    if (n < 0 || n > 12) {
        throw RangeError()
    } else return result;
}