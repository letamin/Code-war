/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Sam Harris => S.H

Patrick Feeney => P.F
*/

function abbrevName(name) {
    var a = name.toUpperCase();
    var b = a.split(" ");
    return (b[0][0] + '.' + b[1][0]);
}