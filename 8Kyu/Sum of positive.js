/* 
https://www.codewars.com/kata/5715eaedb436cf5606000381

[1,-4,7,12] => 1 + 7 + 12 = 20
*/

function positiveSum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) == 1) {
            sum += arr[i];
        }
    }
    return sum;
}

//#2
function positiveSum(arr) {
    return arr.reduce((sum, current) => sum += (current > 0) ? current : 0, 0);
}