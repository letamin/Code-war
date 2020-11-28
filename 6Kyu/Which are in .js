/* 
https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript
*/

function inArray(array1, array2) {
    let result = [];
    array1.forEach(e1 => {
        array2.forEach(e2 => {
            if (e2.includes(e1)) {
                result.push(e1);
            }
        })
    })

    return [...new Set([...result])].sort();
}

//#2
function inArray(arr1, arr2) {
    return arr1.filter(function (needle) {
        return arr2.some(function (haystack) {
            return haystack.indexOf(needle) > -1;
        });
    }).sort();
}

