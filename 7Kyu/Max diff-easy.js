/* 
https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
*/

function maxDiff(list) {
    if (!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
};