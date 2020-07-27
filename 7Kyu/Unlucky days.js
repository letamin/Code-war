/* 
https://www.codewars.com/kata/56eb0be52caf798c630013c0/javascript

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function numberOfFridaythe13thsIn(year) {
    var count = 0;
    for (var month = 0; month < 12; month++) {
        var d = new Date(year, month, 13);
        if (d.getDay() == 5) { //Sunday is 0
            count++;
        }
    }
    return count;
}