/* 
https://www.codewars.com/kata/5d0d1c14c843440026d7958e/javascript

k = [true, true, false, true, false] => 0
k = [false, false, true, false, false] => 2
*/

function findNeededGuards(k) {
    var count = 0;
    for (let i = 0; i < k.length - 1; i++) {
        if (k[i] == false && k[i + 1] == false) {
            count++;
            i++;
        }
    }
    return count
}