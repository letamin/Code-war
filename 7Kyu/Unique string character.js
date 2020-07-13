/* 
https://www.codewars.com/kata/5a262cfb8f27f217f700000b

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
*/

function solve(a, b) {
    var result = '';

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            result += a[i];
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            result += b[i];
        }
    }

    return result;
};