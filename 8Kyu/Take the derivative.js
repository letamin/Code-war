/*
https://www.codewars.com/kata/5963c18ecb97be020b0000a2

derive(7, 8) --> this should output "56x^7"
derive(5, 9) --> this should output "45x^8"
*/

function derive(coefficient, exponent) {
    return coefficient * exponent + "x^" + (exponent - 1);
}