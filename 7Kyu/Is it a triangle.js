/*
https://www.codewars.com/kata/56606694ec01347ce800001b

isTriangle(1, 2, 2) => true
isTriangle(7, 2, 2) => false
*/

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}