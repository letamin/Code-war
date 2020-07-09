/*

https://www.codewars.com/kata/54da539698b8a2ad76000228

The array length should be 10 and we need to get back to the starting point
isValidWalk(['n','s','n','s','n','s','n','s','n','s']) => true

*/

function isValidWalk(walk) {
    var x = 0;
    var y = 0;
    if (walk.length != 10) return false;
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n': x++; break;
            case 's': x--; break;
            case 'w': y++; break;
            case 'e': y--; break;
        }
    }
    return x == 0 && y == 0;
}