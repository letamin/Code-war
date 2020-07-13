/*
https://www.codewars.com/kata/5b5097324a317afc740000fe

Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.
[0, 1, 2, 1, 5, 6, 2, 1, 1, 0] => [[0, 1, 1, 1, 1, 0], [2, 4, 5, 6]]
*/

function binaryCleaner(array) {
    var small = [], big = [];
    array.forEach((a, index) => {
        a < 2 ? small.push(a) : big.push(index)
    })
    return [small, big]
}