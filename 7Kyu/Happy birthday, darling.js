/* 
https://www.codewars.com/kata/5e96332d18ac870032eb735f/javascript

32  -->  "32? That's just 20, in base 16!"
39  -->  "39? That's just 21, in base 19!"
*/

function womensAge(n) {
    return `${n}? That's just ${20 + n % 2}, in base ${Math.floor(n / 2)}!`
}

//#2
function womensAge(n) {
    var radix = 1;
    while (true) {
        var age = toRadix(n, ++radix);
        if (age == 20 || age == 21) break;
    }

    return `${n}? That's just ${age}, in base ${radix}`
}

function toRadix(N, radix) {
    var HexN = "", Q = Math.floor(Math.abs(N)), R;
    while (true) {
        R = Q % radix;
        HexN = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(R)
            + HexN;
        Q = (Q - R) / radix;
        if (Q == 0) break;
    }
    return (N < 0) ? "-" + HexN : HexN
}
