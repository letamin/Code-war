/* 
https://www.codewars.com/kata/52b23340c65ea422b1000045/javascript

[10, 7, 16], [13, 32, 10] --> true, box is bigger than present
[5, 7, 9], [9, 5, 7]      --> false, present and box are same size
[17, 22, 10], [5, 5, 10]) --> false, box is too small
*/

function willFit(present, box) {
    sortDimension(present);
    sortDimension(box);

    return box.every((side, index) => side >= present[index] + 2)
}

function sortDimension(arr) {
    return arr.sort((a, b) => a - b);
}