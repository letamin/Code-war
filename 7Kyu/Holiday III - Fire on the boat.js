/* 

https://www.codewars.com/kata/57e8fba2f11c647abc000944/javascript


*/

function fireFight(s) {
    return s.split(" ").map(x => x == "Fire" ? `~~` : x).join(" ")
}

//#2
function fireFight(s) {
    return s.replace(/Fire/g, "~~")
}
