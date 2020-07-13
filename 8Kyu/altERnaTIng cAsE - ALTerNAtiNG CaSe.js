/*
https://www.codewars.com/kata/56efc695740d30f963000557

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/

String.prototype.toAlternatingCase = function () {
    var newStr = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] == this[i].toUpperCase()) {
            newStr += this[i].toLowerCase();
        } else {
            newStr += this[i].toUpperCase();
        }
    }
    return newStr;
}