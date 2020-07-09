/* 
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text) {
    var count = 0;
    if (text.length <= 1) return 0;
    var test = [...text.toLowerCase()].sort().join('');
    var previous = '';
    for (let i = 0; i < test.length; i++) {
        if (test.charAt(i) == test.charAt(i + 1) && test.charAt(i) != previous) {
            count++;
            previous = test.charAt(i);
        }
    }
    return count;
}