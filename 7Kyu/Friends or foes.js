/*
https://www.codewars.com/kata/55b42574ff091733d900002f

friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]
*/

function friend(friends) {
    var array = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            array.push(friends[i]);
        }
    }
    return array;
}

//#2
function friend(friends) {
    return (friends.filter(a => a.length === 4))
}