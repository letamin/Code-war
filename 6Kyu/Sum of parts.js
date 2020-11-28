/* 
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/javascript
*/

function partsSums(s) {
    let result = [];
    let sum = sumArr(s);
    let temp = 0;

    result.push(sum);
    s.forEach((e, index) => {
        temp += e;
        result.push(sum - temp)
    })

    return result
}

const sumArr = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
}