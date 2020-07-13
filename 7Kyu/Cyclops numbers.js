/*
https://www.codewars.com/kata/56b0bc0826814364a800005a

cyclops(5)
"""5 in biinary"""
"0b101"
"""because 101 is made up of all "1"s with a "0" in the middle, 101 is a cyclops number"""
return True

cyclops(13)
"""13 in binary"""
"0b1101"
"""because 1101 has an even number of bits, it cannot be a cyclops"""
return False

cyclops(17)
"""17 in binary"""
"0b10001"
"""Because 10001 has more than 1 "0" it cannot be a cyclops number"""
return False
*/

function cyclops(n) {
    var array = [...n.toString(2)];
    var count = 0;
    if (array.length % 2 == 0) return false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) count++;
    }
    if (count != 1) return false;
    if (array[(Math.floor(array.length / 2))] != 0) return false;
    else return true;
}