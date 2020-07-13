/*
https://www.codewars.com/kata/58aed2cafab8faca1d000e20

Example 1: Input: { 1, 2, 3 }, 3 -- > (1 ^ 3 + 2 ^ 3 + 3 ^ 3) - (1 + 2 + 3)-- > 36 - 6 -- > Output: 30

Example 2: Input: { 1, 2 }, 5 -- > (1 ^ 5 + 2 ^ 5) - (1 + 2)-- > 33 - 3 -- > Output: 30
*/

function modifiedSum(a, n) {
    return a.reduce((sum, index) => Math.pow(index, n) + sum, 0) - a.reduce((sum, index) => sum + index, 0)
}