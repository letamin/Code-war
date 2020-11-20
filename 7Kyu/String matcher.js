/*
https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/javascript
*/

function isMatching(string, str1, str2) {
    string = spaceRemove(string).toLowerCase();
    str1 = spaceRemove(str1).toLowerCase();
    str2 = spaceRemove(str2).toLowerCase();
    if (string.length != str1.length + str2.length) return false;
    let temp = str1.concat(str2);

    for (let i = 0; i < string.length; i++) {
        if (temp.includes(string[i])) {
            temp = temp.slice(0, temp.lastIndexOf(string[i])) + temp.slice(temp.lastIndexOf(string[i]) + 1)
        }
    }

    return temp ? false : true
}

function spaceRemove(str) {
    str = str.replace(/\s/g, '');
    return str;
}

//#2
function isMatching(string, str1, str2) {
    a_merge = (str1.toLowerCase() + str2.toLowerCase()).split("").sort().join("").trim()
    a_str = string.toLowerCase().split("").sort().join("").trim()
    return a_merge == a_str
}