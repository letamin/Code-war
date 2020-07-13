/*
https://www.codewars.com/kata/54d7660d2daf68c619000d95

convertFracs[(1, 2), (1, 3), (1, 4)]`shouldBe`[(6, 12), (4, 12), (3, 12)]
*/

function convertFrac(lst) {
    var cd = lst.map(i => i[1]).reduce((value, i) => lcm(value, i), 1);
    var array = lst.map(i => cd / i[1] * i[0]);
    var result = array.map(i => i + "," + cd).map(i => `(${i})`).join("");
    return result;
}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

let lcm = (n1, n2) => {
    //Find the gcd first 
    let g = gcd(n1, n2);

    //then calculate the lcm
    return (n1 * n2) / g;
}
