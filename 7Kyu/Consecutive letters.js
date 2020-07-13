/* 
https://www.codewars.com/kata/5ce6728c939bf80029988b57

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
*/

function solve(s) {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
}