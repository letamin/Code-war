/*
https://www.codewars.com/kata/535474308bb336c9980006f2

"riley" -- > "Hello Riley!"
"JACK"  -- > "Hello Jack!"
*/

function greet(n) {
    n = n.toLowerCase();
    var name = n.charAt(0).toUpperCase() + n.slice(1);
    return `Hello ${name}!`
};