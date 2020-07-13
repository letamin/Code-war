/* 
https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3

[4, 3, 1, 2, 5, 10, 6, 7, 9, 8], then your function should return 30(because 4 + 2 + 10 + 6 + 8 = 30)
*/

function sumEvenNumbers(input) {
    var result = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            result += input[i];
        }
    }
    return result;
}

//#2
function sumEvenNumbers(input) {
    return (input.reduce((sum, current) => sum + (current % 2 == 0 ? current : 0), 0));
}