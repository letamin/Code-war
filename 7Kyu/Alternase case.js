/* 
https://www.codewars.com/kata/57a62154cf1fa5b25200031e/javascript

E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) result += s[i].toLowerCase();
        else if (s[i] == s[i].toLowerCase()) result += s[i].toUpperCase();
    }
    return result
}

//#2
function alternateCase(s) {
    return s.split('').map(i => i == i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()).join('')
}