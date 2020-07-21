/*
https://www.codewars.com/kata/5e0b72d2d772160011133654

solve([1,1,1]) = 1, because after you pick on day one, there will be only one chip left
solve([1,2,1]) = 2, you can pick twice; you pick two chips on day one then on day two
solve([4,1,1]) = 2
*/

function solve(arr) {
    let [x, y, z] = arr.slice().sort((a, b) => a - b);
    return Math.min(x + y, Math.floor((x + y + z) / 2));
}