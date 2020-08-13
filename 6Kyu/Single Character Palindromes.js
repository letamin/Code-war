/* 
https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/javascript

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 
*/

function solve(s) {
    if (palindrome(s)) return 'OK';
    else {
        for (let i = 0; i < s.length; i++) {
            let temp = s.slice(0, i) + s.slice(i + 1)
            if (palindrome(temp)) return "remove one"
        }
    }
    return "not possible"
};

function palindrome(s) {
    for (let i = 0, j = s.length - 1; i <= s.length / 2, j >= s.length / 2; i++, j--) {
        if (s[i] != s[j]) return false;
    }
    return true;
}