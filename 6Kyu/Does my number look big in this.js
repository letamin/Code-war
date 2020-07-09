/* 
https://www.codewars.com/kata/5287e858c6b5a9678200083c

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 => true
1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634 => true
*/

function narcissistic(value) {
    var length = value.toString().length;
    var test = value.toString().split("").map(i => parseInt(i));
    return test.reduce((total, i) => total + Math.pow(i, length), 0) == value ? true : false;
}