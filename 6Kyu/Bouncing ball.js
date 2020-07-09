/**
 https://www.codewars.com/kata/5544c7a5cb454edb3c000047

Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1  (Condition 2) not fulfilled.
*/

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
    let seen = 0;

    while (h > window) {
        seen += 1
        h *= bounce
        if (h > window) seen += 1
    }

    return seen;
}