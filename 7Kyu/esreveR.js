/*
https://www.codewars.com/kata/5413759479ba273f8100003d

reverse([1, 2, 3]) => [3, 2, 1]
reverse([1, null, 14, "two"]) => ["two", 14, null, 1]
*/

function reverse(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])
    }

    return newArray;
}