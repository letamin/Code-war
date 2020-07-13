/*
https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
*/

function beeramid(bonus, price) {
    if (bonus < price) return 0;
    if (bonus == price) return 1;
    var beers = Math.floor(bonus / price);
    var total = 0;

    for (let i = 1; i <= beers; i++) {
        total += Math.pow(i, 2);
        if (total >= beers) return i - 1;
    }
}