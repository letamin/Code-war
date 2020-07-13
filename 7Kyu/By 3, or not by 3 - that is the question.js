/*
https://www.codewars.com/kata/59f7fc109f0e86d705000043

"123" -> true
"8409" -> true
"100853" -> false
"33333333" -> true
"7" -> false
*/

function divisibleByThree(str) {
    var total = 0;
    for (let i = 0; i < str.length; i++) {
        total += (parseInt(str[i]));
    }
    return total % 3 == 0;
}

//#2
function divisibleByThree(str) {
    return [...str].reduce((sum, index) => parseInt(sum) + parseInt(index), 0) % 3 === 0;
}