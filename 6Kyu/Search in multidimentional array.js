/*
https://www.codewars.com/kata/52840d2b27e9c932ff0016ae

locate(['a', 'b', ['c', 'd', ['e']]], 'e'); // should return true
locate(['a', 'b', ['c', 'd', ['e']]], 'a'); // should return true
locate(['a', 'b', ['c', 'd', ['e']]], 'f'); // should return false
*/

function locate(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (check(arr[i], value)) return true
    }
    return false;
}

function check(arr, value) {
    if (typeof arr == 'string') {
        if (arr == value) return true;
        return false;
    }
    if (arr.includes(value)) return true;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            if (check(arr[i], value)) return true;
        }
    }
    return false;
}

//#2
var locate = function (arr, v) {
    return arr.some(function (e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}