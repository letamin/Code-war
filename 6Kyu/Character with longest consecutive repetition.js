/* 
https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript

longestRepetition("cbdeuuu900") =>  ["u",3]
longestRepetition("bbbaaabaaaa") => ["a",4]
*/

function longestRepetition(s) {
    if (s.length == 0) return ["", 0]
    let count = 1;
    let previous = s[0];
    let a = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] == previous) {
            count++;
            if (i == s.length - 1) {
                a.push({ character: s[i], count })
            }
        }
        else {
            a.push({ character: previous, count })
            previous = s[i];
            count = 1;
        }
    }
    a.sort((a, b) => b.count - a.count)
    return [a[0].character, a[0].count];
}

//#2
function longestRepetition(s) {
    if (s.length == 0) return ["", 0]
    let count = 1;
    let temp = 0;
    let max = 0;
    let c = '';
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            count++;
            if (i == s.length - 2 && count > max) {
                max = count;
                c = s[i]
            }
        }
        else {
            temp = count;
            if (temp > max) {
                max = temp;
                c = s[i]
            }
            count = 1;
        }
    }
    return [c, max]
}