/* 
https://www.codewars.com/kata/5245a9138ca049e9a10007b8

"dog cat"                 --> 0
"dog DOG cat"             --> 1
"apple dog cat"           --> 0
"pineapple apple dog cat" --> 0
"apple     apple dog cat" --> 1
"apple dog apple dog cat" --> 0
"dog dog DOG dog dog dog" --> 1
"dog dog dog dog cat cat" --> 2
"cat cat dog dog cat cat" --> 3

*/

function countAdjacentPairs(string) {
    string = string.toLowerCase();
    var newString = string.split(" ");
    var count = 0;
    for (let i = 1; i < newString.length; i++) {
        if (newString[i] == newString[i - 1] && newString[i] != newString[i + 1]) count++;
    }
    return count
}