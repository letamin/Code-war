/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

then "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

function correctPolishLetters(string) {
    var newStr = string.split("");
    for (let i = 0; i < newStr.length; i++) {
        switch (string[i]) {
            case 'ą': newStr[i] = 'a'; break;
            case 'ć': newStr[i] = 'c'; break;
            case 'ę': newStr[i] = 'e'; break;
            case 'ł': newStr[i] = 'l'; break;
            case 'ń': newStr[i] = 'n'; break;
            case 'ó': newStr[i] = 'o'; break;
            case 'ś': newStr[i] = 's'; break;
            case 'ź': newStr[i] = 'z'; break;
            case 'ż': newStr[i] = 'z'; break;
            default: newStr[i];
        }
    }
    return (newStr.join(""));
}