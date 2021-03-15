/* 
https://www.codewars.com/kata/595aa94353e43a8746000120/javascript

findDeletedNumber([1,2,3,4,5], [3,4,1,5]) => 2
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) => 5
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) => 0
*/

function findDeletedNumber(arr, mixArr) {
    return arr.filter(v => mixArr.indexOf(v) == -1)[0] || 0
}