/*
https://www.codewars.com/kata/58941fec8afa3618c9000184

upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.
upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var day = 0;
    var height = 0;
    while (height < desiredHeight) {
        height = height + upSpeed;
        if (height >= desiredHeight) return day + 1;
        else height -= downSpeed;
        day++;
    }
    return day;
}