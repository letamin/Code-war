/* 
https://www.codewars.com/kata/57fe5b7108d102fede00137a

instrumental("fa") == "fával"
instrumental("teve") == "tevével"
instrumental("betű") == "betűvel"
instrumental("ablak") == "ablakkal"
instrumental("szék") == "székkel"
instrumental("otthon") == "otthonnal"
instrumental("kar") == "karral"
instrumental("rács") == "ráccsal"
instrumental("kosz") == "kosszal"

*/

function instrumental(word) {
    var front = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
    var back = ['a', 'á', 'o', 'ó', 'u', 'ú'];
    var pairs = {
        a: "á",
        e: "é",
        i: "í",
        o: "ó",
        u: "ú",
        ö: "ő",
        ü: "ű"
    }

    var array = word.split("");
    var lastWord = array[array.length - 1];
    var lastTwo = word.slice(-2);
    if (front.includes(lastWord) || back.includes(lastWord)) {
        if (pairs[lastWord]) array[array.length - 1] = pairs[lastWord];
        front.includes(lastWord) ? array.push("vel") : array.push("val");
        return array.join("");
    } else {
        if (lastTwo == "sz" || lastTwo == "zs" || lastTwo == "cs") {
            var last = array.pop();
            var temp = array[array.length - 1];
            array.push(temp);
            array.push(last);
        } else {
            array.push(lastWord);
        }

        for (let i = array.length - 1; i >= 0; i--) {
            if (front.includes(array[i])) {
                array.push("el");
                return array.join("");
            } else if (back.includes(array[i])) {
                array.push("al");
                return array.join("");
            }
        }

    }
}
