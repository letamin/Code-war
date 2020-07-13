/*
https://www.codewars.com/kata/52fba66badcd10859f00097e

disemvowel("This website is for losers LOL!") => "Ths wbst s fr lsrs LL!"
*/

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

//#2
function disemvowel(str) {
    var vowels = [
        'a',
        'e',
        'i',
        'o',
        'u',
        'A',
        'E',
        'I',
        'O',
        'U'
    ]
    var result = [...str].filter(i => !vowels.includes(i))
    return result.join('')
}