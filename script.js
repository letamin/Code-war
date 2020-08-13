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

console.log(solve("abbaac"))