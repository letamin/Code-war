/*
https://www.codewars.com/kata/5704aea738428f4d30000914

tripleTrouble("this","test","lock") => "ttlheoiscstk"
tripleTrouble("aa","bb","cc") => "abcabc"
*/

function tripleTrouble(one, two, three) {
    var result = "";
    for (let i = 0; i < one.length; i++) {
        result += one[i] + two[i] + three[i]
    }
    return result
}