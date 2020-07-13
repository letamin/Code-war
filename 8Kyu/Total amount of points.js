/* 
https://www.codewars.com/kata/5bb904724c47249b10000131

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) => 30 points in total
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) => 10 points in total
*/

function points(games) {
    var total = 0;
    for (let i = 0; i < games.length; i++) {
        var res = games[i].split(':');
        if (res[0] > res[1]) {
            total += 3;
        } else if (res[0] == res[1]) {
            total += 1;
        }
    }
    return total;
}

//#2
const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0);