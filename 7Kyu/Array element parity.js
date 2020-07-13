/*
https://www.codewars.com/kata/5a092d9e46d843b9db000064

[1, -1, 2, -2, 3] => 3
[-3, 1, 2, 3, -1, -4, -2] => -4
*/

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(-arr[i])) continue;
        else return arr[i]
    }
}