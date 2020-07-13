/*
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/

function zero(operator) {
    return operator ? operator(0) : 0;
}

function one(operator) {
    return operator ? operator(1) : 1;
}

function two(operator) {
    return operator ? operator(2) : 2;
}

function three(operator) {
    return operator ? operator(3) : 3;
}

function four(operator) {
    return operator ? operator(4) : 4;
}

function five(operator) {
    return operator ? operator(5) : 5;
}

function six(operator) {
    return operator ? operator(6) : 6;
}

function seven(operator) {
    return operator ? operator(7) : 7;
}
function eight(operator) {
    return operator ? operator(8) : 8;
}

function nine(operator) {
    return operator ? operator(9) : 9;
}

function plus(b) { return function (a) { return Math.floor(a + b); }; };
function minus(b) { return function (a) { return Math.floor(a - b); }; };
function times(b) { return function (a) { return Math.floor(a * b); }; };
function dividedBy(b) { return function (a) { return Math.floor(a / b); }; };