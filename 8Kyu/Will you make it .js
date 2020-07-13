/*
https://www.codewars.com/kata/5861d28f124b35723e00005e

zeroFuel(50, 25, 2) => true
zeroFuel(100, 50, 1) => false
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (fuelLeft * mpg >= distanceToPump) return true;
    else return false;
};