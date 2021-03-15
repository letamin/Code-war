/*
https://www.codewars.com/kata/55e7d9d63bdc3caa2500007d/javascript

smallest(5) == 60 // 1 to 5 can all divide evenly into 60
smallest(10) == 2520
*/

function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function smallest(n) {
    return n == 1 ? 1 : lcm(n, smallest(n - 1));
}