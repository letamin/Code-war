/* 
https://www.codewars.com/kata/56b7f2f3f18876033f000307/javascript

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
*/

function inAscOrder(arr) {
    return arr.every((_, index) => index == 0 || arr[index] > arr[index - 1])
}
