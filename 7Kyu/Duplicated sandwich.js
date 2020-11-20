/*
https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/javascript
*/

function duplicateSandwich(a) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                result = a.slice(i + 1, j)
            }
        }
    }
    return result;
}
