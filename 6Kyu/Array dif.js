/* 
https://www.codewars.com/kata/523f5d21c841566fde000009

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    return a.filter(i => !b.includes(i))
}