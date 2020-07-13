/*
https://www.codewars.com/kata/5eb34624fec7d10016de426e

martingale(1000, [1, 1, 0, 0, 1]) === 1300
you win your 1st round: gain $100, balance = 1100
win 2nd round: gain $100, balance = 1200
lose 3rd round: lose $100 dollars, balance = 1100
double stake for 4th round and lost: staked $200, lose $200, balance = 900
double stake for 5th round and won: staked $400 won $400, balance = 1300
*/

function martingale(bank, outcomes) {
    var bet = 100;
    for (let i = 0; i < outcomes.length; i++) {
        if (outcomes[i] == 1) {
            bank += bet;
            bet = 100;
        }
        else if (outcomes[i] == 0) {
            bank -= bet;
            bet = bet * 2;
        }
    }
    return bank;
}