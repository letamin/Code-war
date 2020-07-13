/*
https://www.codewars.com/kata/55192f4ecd82ff826900089e

divide(2) === false // 2 = 1 + 1
divide(3) === false // 3 = 1 + 2
divide(4) === true  // 4 = 2 + 2
divide(5) === false // 5 = 2 + 3
divide(6) === true  // 6 = 2 + 4
*/

function divide(weight) {
    return weight > 2 ? (weight - 2) % 2 == 0 : false
}