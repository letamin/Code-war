/*
https://www.codewars.com/kata/529872bdd0f550a06b00026e

greatestProduct("123834539327238239583") // should return 3240
*/

function greatestProduct(input) {
    if (input.length < 5) return 0;
    var arr = input.split("");
    var max = 0;
    for (let i = 4; i <= arr.length - 1; i++) {
        var temp = arr[i] * arr[i - 1] * arr[i - 2] * arr[i - 3] * arr[i - 4];
        if (temp > max) max = temp;
    }

    return max;
}
