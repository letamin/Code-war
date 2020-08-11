/* 
https://www.codewars.com/kata/589b1c15081bcbfe6700017a/javascript
*/

function cost(mins) {
    let firstHour = 30;
    if (mins <= 65) return firstHour;
    let remainHour = Math.floor((mins - 60) / 30);
    let remainMinutes = Math.floor((mins - 60) % 30);
    let money = remainHour * 10 + firstHour;
    return remainMinutes <= 5 ? money : remainHour <= 30 ? money + 10 : money + 20
}
