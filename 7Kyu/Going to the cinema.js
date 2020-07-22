/* 
https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/javascript

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)
*/

function movie(card, ticket, perc) {
    let times = 0, previousTicket = ticket, bTotal = card, aTotal = 0;
    while (aTotal <= Math.ceil(bTotal)) {
        bTotal += (previousTicket * perc);
        previousTicket *= perc;
        aTotal += ticket;
        times += 1;
    }
    return times;
};