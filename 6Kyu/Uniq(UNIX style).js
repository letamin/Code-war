/* 
https://www.codewars.com/kata/52249faee9abb9cefa0001ee

['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c']-- > ['a', 'b', 'c', 'a', 'b', 'c']
*/

function uniq(a) {
    var result = [];
    var previous = '';
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] == previous) continue;
        else {
            result.push(a[i]);
            previous = a[i];
        }
    }
    return result;
}