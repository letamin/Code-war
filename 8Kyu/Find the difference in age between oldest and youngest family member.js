/*
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
*/

function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}