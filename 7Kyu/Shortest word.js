/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

findShort("bitcoin take over the world maybe who knows perhaps") => 3
*/

function findShort(s) {
    var result = Number.MAX_SAFE_INTEGER;
    var string = s.split(' ');
    for (let i = 0; i < string.length; i++) {
        if (string[i].length < result) {
            result = string[i].length
        }
    }

    return result;
}

//#2
function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}