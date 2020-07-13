/*
https://www.codewars.com/kata/556196a6091a7e7f58000018

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
*/

function largestPairSum(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1] + numbers[numbers.length - 2]
}