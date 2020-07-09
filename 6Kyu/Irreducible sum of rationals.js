/* 
https://www.codewars.com/kata/5517fcb0236c8826940003c9

[ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]

    1/2  +  1/3  +  1/4     =      13/12
*/
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function sumFracts(l) {
    if (l.length == 0) return null;
    var n = l.map(i => i[0]);
    var d = l.map(i => i[1]);
    var cd = d.reduce((value, i) => value * i);
    var cn = l.map(i => i[0] * cd / i[1]).reduce((value, i) => value + i);
    var c = gcd(cn, cd);
    return cd / c == 1 ? [cn / c] : [cn / c, cd / c];
}