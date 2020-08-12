/* 
https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/javascript

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.
*/

function solve(st, a, b) {
    let test = st.slice(a, b + 1).split('').reverse().join('');
    return st.slice(0, a) + test + st.slice(b + 1)
}