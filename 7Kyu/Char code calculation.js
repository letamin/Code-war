/* 
https://www.codewars.com/kata/57f75cc397d62fc93d000059/javascript

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

total1 = 656667
              ^
total2 = 656661
              ^

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

function calc(x) {
    let charCode = "";
    for (c in x) {
        charCode += x.charCodeAt(c);
    }

    let charCode2 = charCode.replaceAll(7, 1);
    return Math.abs(sum(charCode.split("")) - sum(charCode2.split("")))
}

function sum(arr) {
    return arr.reduce((e, v) => e += +v, 0)
}