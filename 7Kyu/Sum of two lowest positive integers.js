/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
    return Math.min.apply(null, numbers.filter(n => n != Math.min(...numbers))) + Math.min(...numbers);
}