/* 
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]); => 6
firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]); => null
*/

function firstNonConsecutive(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + 1 != array[i + 1]) return array[i + 1];
    }
    return null;
}