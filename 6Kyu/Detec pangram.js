/* 
https://www.codewars.com/kata/545cedaa9943f7fe7b000048

*/

function isPangram(string) {
    string = string.toLowerCase();
    var a = "abcdefghijklmnopqrstuvwxyz".split('');
    return a.every((x) => {
        return string.indexOf(x) == -1 ? false : true;
    })
}

//#2
function isPangram(string) {
    input = string.toLowerCase();
    input = input.replace(/[ .,!:0-9]+/g, "");
    var map = new Map();
    for (let i = 0; i < input.length; i++) {
        if (map.has(input[i])) {
            var value = map.get(input[i]);
            map.set(input[i], value + 1);
        } else map.set(input[i], 1);
    }
    return map.size == 26 ? true : false
}