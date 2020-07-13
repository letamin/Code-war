/*
https://www.codewars.com/kata/530e15517bc88ac656000716
*/
function rot13(message) {
    var result = ''
    for (let i = 0; i < message.length; i++) {
        if (message.charCodeAt(i) <= 122 && message.charCodeAt(i) >= 97) {
            if (message.charCodeAt(i) + 13 <= 122) result += String.fromCharCode(message.charCodeAt(i) + 13);
            else result += String.fromCharCode(13 - (122 - message.charCodeAt(i)) + 96);
        } else if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            if (message.charCodeAt(i) + 13 <= 90) result += String.fromCharCode(message.charCodeAt(i) + 13);
            else result += String.fromCharCode(13 - (90 - message.charCodeAt(i)) + 64);
        } else result += message[i]
    }

    return result;
}

//#2
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}