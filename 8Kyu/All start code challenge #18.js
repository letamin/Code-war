/*
https://www.codewars.com/kata/5865918c6b569962950002a1

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0
*/

function strCount(str, letter) {
    return [...str].reduce((count, index) => count += index == letter ? 1 : 0, 0)
}