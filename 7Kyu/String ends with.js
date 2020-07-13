/*
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending) {
    return str.endsWith(ending);
}