/* 

https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
*/
function printerError(s) {
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        if (!(97 <= s.charCodeAt(i) && s.charCodeAt(i) <= 109)) count++
    }
    return `${count}/${s.length}`
}