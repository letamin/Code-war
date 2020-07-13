/*
https://www.codewars.com/kata/564d398e2ecf66cec00000a9
*/

function typeOfTriangle(sideA, sideB, sideC) {
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        if (sideA == sideB && sideB == sideC) return "Equilateral";
        if (sideA == sideC || sideC == sideB || sideB == sideA) return "Isosceles";
        return "Scalene"
    }
    return "Not a valid triangle"
}