/* 
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

arrayPlusArray([1, 2, 3], [4, 5, 6]) => 21;
*/

function arrayPlusArray(arr1, arr2) {
    var sum = 0;
    for (let i in arr1) {
        sum += arr1[i];
    }
    for (let i in arr1) {
        sum += arr2[i];
    }
    return sum;
}

//#2
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}