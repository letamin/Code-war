/*
https://www.codewars.com/kata/59cfc000aeb2844d16000075

capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
*/

function capitalize(s) {
    var u = s.toUpperCase();
    var o = "";
    var t = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            o += u.charAt(i);
            t += s.charAt(i);
        } else {
            o += s.charAt(i);
            t += u.charAt(i);
        }
    }

    return [o, t];
};

//#2
function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};