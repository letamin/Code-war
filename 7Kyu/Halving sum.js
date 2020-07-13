/* 
https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

n + n/2 + n/4 + n/8 + ...
25  => 25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
    var sum = 0;
    while (n > 0) {
        sum += n;
        n = Math.floor(n / 2);
    }
    return sum;
}

//#2
function halvingSum(n) {
    if (n == 1) return n;
    return n + halvingSum(Math.floor(n / 2))
}