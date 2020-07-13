/*
https://www.codewars.com/kata/58e3ea29a33b52c1dc0000c0

dotProduct(new Vector(2, 0, -1), new Vector(0, -2, 1)) => -1
*/

function dotProduct(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}