/*
https://www.codewars.com/kata/5650ab06d11d675371000003

splitInParts("supercalifragilisticexpialidocious", 3) => "sup erc ali fra gil ist ice xpi ali doc iou s";
splitInParts("HelloKata", 1) => "H e l l o K a t a"
*/

var splitInParts = function (s, partLength) {
    var string = '';
    for (let i = 0; i < s.length; i += partLength) {
        string += s.slice(i, i + partLength) + ' ';
    }
    return string.trim();
}