/* 
https://www.codewars.com/kata/5679aa472b8f57fb8c000047
*/

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        var left = sum(arr.slice(0, i));
        var right = sum(arr.slice(i + 1));
        if (left == right) return i;
    }
    return -1;
}

function sum(arr) {
    return arr.reduce((sum, index) => sum + index, 0)
}