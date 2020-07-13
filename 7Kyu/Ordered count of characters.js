/*
https://www.codewars.com/kata/57a6633153ba33189e000074

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

var orderedCount = function (text) {
    // Implement me!
    let map = new Map();

    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            let count = 0;
            count = map.get(text[i]);
            map.set(text[i], ++count);
        } else {
            map.set(text[i], 1)
        }
    }
    return (Array.from(map))
}