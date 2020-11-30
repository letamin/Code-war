/* 
https://www.codewars.com/kata/5a946d9fba1bb5135100007c/javascript
*/

function minimumNumber(numbers) {
    //your code here
    let sum = numbers.reduce((e, v) => e + v, 0);
    let count = 0;
    if (isPrime(sum)) return count;
    while (!isPrime(sum)) {
        isPrime(++sum);
        count++;
    }
    return count;
}

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}