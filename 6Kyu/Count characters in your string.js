/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091

 If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
*/

function count(string) {
    var obj = {};
    for (let i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])) {
            obj[string[i]]++;
        } else obj[string[i]] = 1;
    }
    return obj
}