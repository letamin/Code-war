/* 

https://www.codewars.com/kata/5340298112fa30e786000688

[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

*/

function twosDifference(input) {
    var result = []
    for (let i = 0; i < input.length; i++) {
        if (input.includes(input[i] + 2)) {
            result.push([input[i], input[i] + 2])
        }
    }
    return result;
}