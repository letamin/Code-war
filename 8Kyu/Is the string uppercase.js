/*
https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
*/

String.prototype.isUpperCase = function () {
    return this == this.toUpperCase()
}