/*
https://www.codewars.com/kata/59c5f4e9d751df43cf000035
*/

function solve(s) {
    return (s.split(/[^aeiou]/).reduce((max, i) => Math.max(max, i.length), 0));
}