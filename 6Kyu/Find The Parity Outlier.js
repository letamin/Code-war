/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers) {
    var odd = [];
    var even = [];

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 0) even.push(integers[i]);
        else odd.push(integers[i]);
    }

    return odd.length == 1 ? parseInt(odd.join()) : parseInt(even.join())
}