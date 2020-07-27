/*
https://www.codewars.com/kata/5b180e9fedaa564a7000009a/javascript

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

function solve(input) {
    var low = (input.match(/[a-z]/g) || 0).length;
    var up = (input.match(/[A-Z]/g) || 0).length;
    return (up > low) ? input.toUpperCase() : input.toLowerCase()
}
