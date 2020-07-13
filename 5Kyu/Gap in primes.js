/* 
https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4
*/

function gap(g, m, n) {
    var lastPrime = 0;
    var gap = 0;
    var result = [];
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            gap = i - lastPrime;

            if (gap == g) {
                result.push(lastPrime);
                result.push(i);
                return result;
            }

            lastPrime = i;
        }
    }
    return null;
}

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}
