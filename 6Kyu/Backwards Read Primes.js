/* 
https://www.codewars.com/kata/5539fecef69c483c5a000015/javascript

backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] 
backwardsPrime(501, 599) => []
*/

function backwardsPrime(start, stop) {
    let res = [];
    for (let i = start; i <= stop; i++) {
        if (isPrime(i)) {
            if (isPrime(reverse(i))) {
                res.push(i)
            }
        }
    }
    return res;
}

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

const reverse = num => {
    let temp = num.toString().split("").reverse().join("");
    if (+temp !== num) return +temp;
    else return 0;
}