/*
https://www.codewars.com/kata/550f22f4d758534c1100025a

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] => ["WEST"]
["NORTH", "WEST", "SOUTH", "EAST"] => ["NORTH", "WEST", "SOUTH", "EAST"]
*/

function dirReduc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH" || arr[i] == "SOUTH" && arr[i + 1] == "NORTH" ||
            arr[i] == "EAST" && arr[i + 1] == "WEST" || arr[i] == "WEST" && arr[i + 1] == "EAST") {
            arr.splice(i, 2);
            i = -1;
        }
    }
    return arr;
}

//#2
function dirReduc(arr) {
    var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (pattern.test(str)) str = str.replace(pattern, '');
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}