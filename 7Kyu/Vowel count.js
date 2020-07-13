/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3

getCount("abracadabra") => 5
*/

function getCount(str) {
    var vowels = [
        'a', 'e', 'i', 'o', 'u'
    ]
    return ([...str].filter(a => vowels.includes(a)).length)
}