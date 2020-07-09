/*
https://www.codewars.com/kata/541c8630095125aba6000c00

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {
    if (n - 10 < 0) return n;
    else {
        var result = 0;
        while (n >= 1) {
            result += n % 10;
            n = Math.floor(n / 10);
        }

        return digital_root(result);
    }
}