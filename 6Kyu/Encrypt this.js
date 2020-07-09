/*
https://www.codewars.com/kata/5848565e273af816fb000449

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

function encryptThis(input) {
    var arr = input.split(" ");
    var newArr = arr.map((text) => hehe(text))
    return newArr.join(" ");
}

function hehe(text) {
    if (text.length == 1) return text.charCodeAt(0);
    else if (text.length == 2) return text.charCodeAt(0) + text[1] + text[1]
    else return text = text.charCodeAt(0) + text[text.length - 1] + text.slice(2, text.length - 1) + text[1]
}