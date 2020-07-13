/*
https://www.codewars.com/kata/55955a48a4e9c1a77500005a

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

function greet(name) {
    return name ? 'hello ' + name + '!' : null;
}