/* 
https://www.codewars.com/kata/5aa39ba75084d7cf45000008/javascript

f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1

solve(2) = '010'
solve(3) = '01001'
*/

function solve(n) {
    if (n == 0) return '0';
    if (n == 1) return '01'
    return solve(n - 1) + solve(n - 2)
}
