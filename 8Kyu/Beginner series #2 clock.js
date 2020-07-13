/*
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

past(0, 1, 1) == 61000
*/

function past(h, m, s) {
    return s * 1000 + m * 60000 + h * 3600000
}