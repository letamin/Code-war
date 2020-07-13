/*
https://www.codewars.com/kata/558fa34727c2d274c10000ae

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

"cabbage" --> 14
*/


function scrabbleScore(str) {
    if (str.length == 0) return 0;
    else {
        return str.toUpperCase().split('').reduce(function (score, v) { return score + ($dict[v] || 0) }, 0)
    }
}