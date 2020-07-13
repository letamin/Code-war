/*
https://www.codewars.com/kata/5ae62fcf252e66d44d00008e

expressionsMatter(1,2,3)  ==>  return 9
expressionsMatter(1,1,1)  ==>  return 3
*/
function expressionMatter(a, b, c) {
    let max1 = (a + b + c > (a + b) * c ? a + b + c : (a + b) * c)
    let max2 = (a * b * c > a * (b + c) ? a * b * c : a * (b + c))
    return (max1 > max2 ? max1 : max2)
}