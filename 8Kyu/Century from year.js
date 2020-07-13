/* 
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
*/

function century(year) {
    return Math.ceil(year / 100);
}