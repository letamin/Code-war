/*
https://www.codewars.com/kata/546e2562b03326a88e000020

squareDigits(9119) => 811181
*/

function squareDigits(n) {
    var result = '';

    while (n > 0) {
        let digit = n % 10;
        result = digit * digit + result;
        n = Math.floor(n / 10);
    }

    return parseInt(result)
}