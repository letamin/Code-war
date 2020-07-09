/*
https://www.codewars.com/kata/598d89971928a085c000001a

([1,2,3,4,5])  =>  [1,1,2,3,4]
([4,2,1,3,5])  =>  [1,1,2,3,4]
([2,3,4,5,6])  =>  [1,2,3,4,5]
([2,2,2])      =>  [1,2,2]
([42])         =>  [1]

*/

function replacement(a) {
    a.sort((a, b) => a - b);
    a.pop() == 1 ? a.push(2) : a.unshift(1);
    return a;
}

//#2:
function replacement(a) {
    if (a.length == 1 && a[0] != 1) return [1];
    if (a.length == 1) return [2];
    a.sort((a, b) => a - b);
    if (a[0] == 1 && a[a.length - 1] == 1) {
        a[a.length - 1] = 2;
        return a.sort((a, b) => a - b);
    }
    a[a.length - 1] = 1;
    return a.sort((a, b) => a - b);
}