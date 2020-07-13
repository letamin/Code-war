/*
https://www.codewars.com/kata/52e1476c8147a7547a000811

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
*/

function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}

/* Explainations:
^               # start of input
(?=.*?[A-Z])    # Lookahead to make sure there is at least one upper case letter
(?=.*?[a-z])    # Lookahead to make sure there is at least one lower case letter
(?=.*?[0-9])    # Lookahead to make sure there is at least one number
[A-Za-z0-9]{6,} # Make sure there are at least 6 characters of [A-Za-z0-9]
$               # end of input
*/