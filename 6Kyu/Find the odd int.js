/** 

https://www.codewars.com/kata/54da5a58ea159efa38000836

Given an array, find the integer that appears an odd number of times.

*/

function findOdd(A) {
    var odd = 0;
    for (let i = 0; i < A.length; i++) {
        odd ^= A[i];
    }
    return odd;
}

/**

Some explaination:

A ^ A = 0;
A ^ 0 = A;

=>  0 ^ 20 = 20;
    20 ^ 1 = 20 ^ 1 (we dont really need to know the result, there will be 20 and 1 later to cross these out)
    ......
    20 ^ 1 ^ -1 ^ 2 ^ -2 ^ 3 ^ 3 =  20 ^ 1 ^ -1 ^ 2 ^ -2 (3 ^ 3 will be 0)

    This will continue to cross out the numbers that appear even number of times, leave the one that appears odd time left.
*/