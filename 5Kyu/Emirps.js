/*
https://www.codewars.com/kata/55de8eabd9bef5205e0000ba
*/

function findEmirp(n) {
    var count = 0;
    var max = 0;
    var sum = 0;
    var result = [];
    for (let i = 1; i < n; i++) {
        if (isPrime(i) && i > 10 && i != palindrome(i) && isPrime(palindrome(i))) {
            count++;
            result.push(i);
        }
    }

    if (result.length > 0) {
        sum = result.reduce((sum, index) => sum + index);
        max = Math.max(...result);
    }

    return [count, max, sum]
}

const palindrome = num => {
    return parseInt(num.toString().split("").reverse().join(""));
}

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}