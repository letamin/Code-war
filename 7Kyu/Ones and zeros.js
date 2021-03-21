/* 
https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript
*/

const binaryArrayToNumber = arr => {
    let num = +arr.join("");
    return parseInt(num, 2)
};