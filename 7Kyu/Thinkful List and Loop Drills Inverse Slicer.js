/* 
https://www.codewars.com/kata/586ec0b8d098206cce001141/javascript

>>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]
*/

function inverseSlice(items, a, b) {
    return items.slice(0, a).concat(items.slice(b))
}