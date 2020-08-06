/* 
https://www.codewars.com/kata/5f0ed36164f2bc00283aed07

overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8
*/

let hodd = (r, n) => 1 + (r - 1) * 2; // house odd.
let heven = (r, n) => 2 * n - (r - 1) * 2; // house even.
let rodd = (h, n) => (h + 1) / 2; // row for odd house.
let reven = (h, n) => (2 * n + 2 - h) / 2; //row for even house.

let overTheRoad = (h, n) => 0 == n % 2 ? hodd(reven(h, n), n) : heven(rodd(h, n), n);

//#2
function overTheRoad(address, n) {
    return (n * 2 + 1) - address;
}