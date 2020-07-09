/*
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

 */

function duplicateEncode(words) {
    var map = new Map;
    words = words.toLowerCase();
    word = words.split("");
    for (let i = 0; i < word.length; i++) {
        if (!map.has(word[i])) {
            map.set(word[i], i);
            word[i] = '(';
        } else {
            word[map.get(word[i])] = ')';
            word[i] = ')';
        }
    }
    return word.join('');
}
