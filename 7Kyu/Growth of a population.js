/* 
https://www.codewars.com/kata/563b662a59afc2b5120000c6/javascript

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
*/

function nbYear(p0, percent, aug, p) {
    var previousYear = p0;
    var year = 0;
    percent /= 100;
    while (p0 < p) {
        p0 += (previousYear * percent) + aug;
        previousYear = p0
        year++
    }
    return year;
}