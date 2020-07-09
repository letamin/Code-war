/* 
https://www.codewars.com/kata/5208f99aee097e6552000148

solution("camelCasing")  ==  "camel Casing"
*/

function solution(string) {
    return (string.replace(/([A-Z])/g, ' $1'));

}