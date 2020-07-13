/*
https://www.codewars.com/kata/580a4001d6df740d61000301

[0, 1] -> [0, 1]
[1, 4, 6] -> [0, 1, 2, 3, 4, 5, 6]
[3, 4, 5] -> [0, 1, 2, 3, 4, 5]
[0, 1, 0] -> [0]
*/

function completeSeries(arr) {
    if ((new Set(arr)).size !== arr.length) return [0];
    else {
        arr.sort();
        var newArray = []
        for (let i = 0; i <= Math.max(...arr); i++) {
            newArray.push(i)
        }
    }
    return newArray;
}