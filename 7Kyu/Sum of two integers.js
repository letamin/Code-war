/* 
https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac/javascript
*/

function add(a, b) {
    if (b == 0) {
        return a;
    } else {
        return add(a ^ b, (a & b) << 1)
    }
}