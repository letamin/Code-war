/*
https://www.codewars.com/kata/57d1f36705c186d018000813/javascript
*/

function gordon(ramsay) {
    return ramsay
        .toUpperCase()
        .replace(/\w+/g, '$&!!!!')
        .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}
