/* 
https://www.codewars.com/kata/58f8b35fda19c0c79400020f/javascript

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.
You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

[
  {i: 4, n:6},
  {i: 7, n:16}
]
*/

function allNonConsecutive(arr) {
    let result = [];

    if (arr.length == 1) return [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 != arr[i + 1]) {
            result.push({ i: i + 1, n: arr[i + 1] })
        }
    }
    return result;
}
