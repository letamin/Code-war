/* 
https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e

As an example, the word "hello" would become "0.1.2.2.3"
*/
function wordPattern(word) {
    word = word.toLowerCase();
    let result = '';
    let count = -1;
    let object = {};
    for (let i = 0; i < word.length; i++) {
        if (!(word[i] in object)) {
            count++;
            object[word[i]] = `.${count}`;
        }
        result += object[word[i]];
    }
    return result.slice(1);
}