/* 
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/javascript

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

function solve(input) {
    var result = [0, 0, 0, 0];
    for (let i = 0; i < input.length; i++) {
        if (65 <= input.charCodeAt(i) && input.charCodeAt(i) <= 90) result[0]++;
        else if (97 <= input.charCodeAt(i) && input.charCodeAt(i) <= 122) result[1]++;
        else if (48 <= input.charCodeAt(i) && input.charCodeAt(i) <= 57) result[2]++;
        else result[3]++
    }
    return result
}
