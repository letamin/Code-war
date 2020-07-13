/*
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
*/

function removeEveryOther(arr) {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArray.push(arr[i])
        }
    }
    return (newArray)
}