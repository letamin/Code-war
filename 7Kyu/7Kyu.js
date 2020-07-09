/****************************** 7 Kyu *******************************/

//Split In Parts:

var splitInParts = function (s, partLength) {
    var string = '';
    for (let i = 0; i < s.length; i += partLength) {
        string += s.slice(i, i + partLength) + ' ';
    }
    return string.trim();
}
/*
splitInParts("supercalifragilisticexpialidocious", 3) => "sup erc ali fra gil ist ice xpi ali doc iou s";
splitInParts("HelloKata", 1) => "H e l l o K a t a"
*/

//-----------------------------------------------------------------------------

//Unique string characters:

function solve(a, b) {
    var array1 = [...a];
    var array2 = [...b];
    var result = '';

    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            result += array1[i];
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
            result += array2[i];
        }
    }

    return result;
};

solve("xyab", "xzca");
solve("xyabb", "xzca");

//-----------------------------------------------------------------------------

//ATM:

function solve(n) {
    if (n % 10 !== 0) return -1;
    let count = 0;
    while (n >= 500) { n -= 500; count += 1 }
    while (n >= 200) { n -= 200; count += 1 }
    while (n >= 100) { n -= 100; count += 1 }
    while (n >= 50) { n -= 50; count += 1 }
    while (n >= 20) { n -= 20; count += 1 }
    while (n >= 10) { n -= 10; count += 1 }
    return count;
}

solve(770);
solve(5000);
solve(1250);

//-----------------------------------------------------------------------------

//Ordered Count of Characters:

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

orderedCount("abracadabra");

//-----------------------------------------------------------------------------

//Naught or Nice:

function getNiceNames(people) {
    var nice = [];
    people.forEach(person => {
        if (person.wasNice == true) {
            nice.push(person.name);
        }
    })

    return nice;
}

function getNaughtyNames(people) {
    var naughty = [];
    people.forEach(person => {
        if (person.wasNice == false) {
            naughty.push(person.name);
        }
    })

    return naughty;
}

//#2:
function getNiceNames(people) {
    return people.filter(person => person.wasNice).map(person => person.name);
}

function getNaughtyNames(people) {
    return people.filter(person => !person.wasNice).map(person => person.name);
}

//-----------------------------------------------------------------------------

//Sum of odd numbers:

function rowSumOddNumbers(n) {
    return n * n * n;
}
/*
Given the triangle of consecutive odd numbers:
1
3     5
7     9    11
13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index(starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

//-----------------------------------------------------------------------------

//By 3, or not by 3 ? That is the question. . .


function divisibleByThree(str) {
    var total = 0;
    for (let i = 0; i < str.length; i++) {
        total += (parseInt(str[i]));
    }
    return total % 3 == 0;
}

//#2
function divisibleByThree(str) {
    return [...str].reduce((sum, index) => parseInt(sum) + parseInt(index), 0) % 3 === 0;
}
/*
"123" -> true
"8409" -> true
"100853" -> false
"33333333" -> true
"7" -> false
*/

//-----------------------------------------------------------------------------

//Return the first M multiples of N:

function multiples(m, n) {
    var array = [];
    for (let i = 0; i < m; i++) {
        array[i] = n * (i + 1);
    }
    return array;
}
/*
multiples(3, 5.0) => [5.0, 10.0, 15.0]
*/

//-----------------------------------------------------------------------------

//Beginner Series #3 Sum of Numbers:

function getSum(a, b) {
    //Good luck!
    return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

//-----------------------------------------------------------------------------

//Series of integers from m to n

function generateIntegers(m, n) {
    var array = [];
    for (let i = m; i <= n; i++) {
        array.push(i);
    }
    return array;
}

generateIntegers(2, 5) // --> [2, 3, 4, 5]

//-----------------------------------------------------------------------------

//My Languages:

function myLanguages(r) {
    return Object.keys(r).sort((a, b) => r[b] - r[a]).filter(k => r[k] >= 60)
}
/*
{ "Java": 10, "Ruby": 80, "Python": 65 } --> ["Ruby", "Python"]
{ "Hindi": 60, "Dutch" : 93, "Greek": 71 } --> ["Dutch", "Greek", "Hindi"]
{ "C++": 50, "ASM": 10, "Haskell": 20 } --> []
*/

//-----------------------------------------------------------------------------

//Halving Sum:

function halvingSum(n) {
    var sum = 0;
    while (n > 0) {
        sum += n;
        n = Math.floor(n / 2);
    }
    return sum;
}

//#2
function halvingSum(n) {
    if (n == 1) return n;
    return n + halvingSum(Math.floor(n / 2))
}
/*
25  => 25 + 12 + 6 + 3 + 1 = 47
*/

//-----------------------------------------------------------------------------

//Sum even numbers

function sumEvenNumbers(input) {
    var result = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 == 0) {
            result += input[i];
        }
    }
    return result;
}

//#2
function sumEvenNumbers(input) {
    return (input.reduce((sum, current) => sum + (current % 2 == 0 ? current : 0), 0));
}
/*
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8], then your function should return 30(because 4 + 2 + 10 + 6 + 8 = 30)
*/

//-----------------------------------------------------------------------------

//Not above the one!

function binaryCleaner(array) {
    var small = [], big = [];
    array.forEach((a, index) => {
        a < 2 ? small.push(a) : big.push(index)
    })
    return [small, big]
}
/*
Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.
[0, 1, 2, 1, 5, 6, 2, 1, 1, 0] => [[0, 1, 1, 1, 1, 0], [2, 4, 5, 6]]
*/

//-----------------------------------------------------------------------------

//Basic Calculator

function calculate(num1, operation, num2) {
    //TODO: make a basic calculator.
    switch (operation) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num2 != 0 ? num1 / num2 : null;
            break;
        default:
            return null;
    }
}

calculate(2, "+", 4); //Should return 6
calculate(6, "-", 1.5); //Should return 4.5
calculate(-4, "*", 8); //Should return -32
calculate(49, "/", -7); //Should return -7
calculate(8, "m", 2); //Should return null
calculate(4, "/", 0) //should return null

//-----------------------------------------------------------------------------

//esreveR

function reverse(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])
    }

    return newArray;
}
/*
reverse([1, 2, 3]) => [3, 2, 1]
reverse([1, null, 14, "two"]) => ["two", 14, null, 1]
*/

//-----------------------------------------------------------------------------

//Disemvowel Trolls

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

//#2
function disemvowel(str) {
    var vowels = [
        'a',
        'e',
        'i',
        'o',
        'u',
        'A',
        'E',
        'I',
        'O',
        'U'
    ]
    var result = [...str].filter(i => !vowels.includes(i))
    return result.join('')
}
/*
disemvowel("This website is for losers LOL!") => "Ths wbst s fr lsrs LL!"
*/

//-----------------------------------------------------------------------------

//Cyclops numbers

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
/*
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

//-----------------------------------------------------------------------------

//Number of Decimal Digits

function digits(n) {
    return n.toString().length;
}
/*
digits(12345) => 5
*/

//-----------------------------------------------------------------------------

//Alternate capitalization

function capitalize(s) {
    var u = s.toUpperCase();
    var o = "";
    var t = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            o += u.charAt(i);
            t += s.charAt(i);
        } else {
            o += s.charAt(i);
            t += u.charAt(i);
        }
    }

    return [o, t];
};

//#2
function capitalize(s) {
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};

capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

//-----------------------------------------------------------------------------

//Geometry Basics: Dot Product in 3D

function dotProduct(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
/*
Write a function calculating dot product of Vector a and Vector b.

    dotProduct(new Vector(2, 0, -1), new Vector(0, -2, 1)) => -1
*/

//-----------------------------------------------------------------------------

//Geometry Basics: Triangle Perimeter in 2D

function trianglePerimeter(ᐃ) {
    var ab = Math.hypot(ᐃ.a.x - ᐃ.b.x, ᐃ.a.y - ᐃ.b.y);
    var bc = Math.hypot(ᐃ.b.x - ᐃ.c.x, ᐃ.b.y - ᐃ.c.y);
    var ca = Math.hypot(ᐃ.c.x - ᐃ.a.x, ᐃ.c.y - ᐃ.a.y);
    return ab + bc + ca;
}
/*
trianglePerimeter(new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))) => 120
*/

//-----------------------------------------------------------------------------

//Simple Fun #74: Growing Plant

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var day = 0;
    var height = 0;
    while (height < desiredHeight) {
        height = height + upSpeed;
        if (height >= desiredHeight) return day + 1;
        else height -= downSpeed;
        day++;
    }
    return day;
}
/*
upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.
upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.
*/

//-----------------------------------------------------------------------------

//String ends with?

function solution(str, ending) {
    return str.endsWith(ending);
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

//-----------------------------------------------------------------------------

//Shortest Word

function findShort(s) {
    var result = Number.MAX_SAFE_INTEGER;
    var string = s.split(' ');
    for (let i = 0; i < string.length; i++) {
        if (string[i].length < result) {
            result = string[i].length
        }
    }

    return result;
}

//#2
function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}
/*
findShort("bitcoin take over the world maybe who knows perhaps") => 3
*/

//-----------------------------------------------------------------------------

//Square every Digit

function squareDigits(n) {
    var result = '';

    while (n > 0) {
        let digit = n % 10;
        result = digit * digit + result;
        n = Math.floor(n / 10);
    }

    return parseInt(result)
}
/*
squareDigits(9119) => 811181
*/

//-----------------------------------------------------------------------------

//Factorial

function factorial(n) {
    var result = 1;
    if (n == 0) return 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    if (n < 0 || n > 12) {
        throw RangeError()
    } else return result;
}
/*
5! = 5 * 4 * 3 * 2 * 1 = 120.
*/

//-----------------------------------------------------------------------------

//Mumbling

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

//-----------------------------------------------------------------------------

//Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    return Math.min.apply(null, numbers.filter(n => n != Math.min(...numbers))) + Math.min(...numbers);
}
/*
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

//-----------------------------------------------------------------------------

//Friends or Foes

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

friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]

//-----------------------------------------------------------------------------

//Vowel Count

function getCount(str) {
    var vowels = [
        'a', 'e', 'i', 'o', 'u'
    ]
    return ([...str].filter(a => vowels.includes(a)).length)
}
/*
getCount("abracadabra") => 5
*/

//-----------------------------------------------------------------------------

//Highest and Lowest

function highAndLow(numbers) {
    return (Math.max(...numbers.split(" ")) + ' ' + Math.min(...numbers.split(" ")))
}

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

//-----------------------------------------------------------------------------

//Is this a triangle

function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
}
/*
isTriangle(1, 2, 2) => true
isTriangle(7, 2, 2) => false
*/

//-----------------------------------------------------------------------------

//Complete Series

function completeSeries(arr) {
    if ((new Set(arr)).size !== arr.length) return [0];
    else {
        arr.sort();
        var newArray = []
        for (let i = 0; i <= Math.max(...arr); i++) {
            newArray.push(i)
        }
    }
    return newArray;
}
/*
inputs
[0, 1] -> [0, 1]
[1, 4, 6] -> [0, 1, 2, 3, 4, 5, 6]
[3, 4, 5] -> [0, 1, 2, 3, 4, 5]
[0, 1, 0] -> [0]
*/

//-----------------------------------------------------------------------------
//Scrabble Score

function scrabbleScore(str) {
    if (str.length == 0) return 0;
    else {
        return str.toUpperCase().split('').reduce(function (score, v) { return score + ($dict[v] || 0) }, 0)
    }
}

//-----------------------------------------------------------------------------

//Nth power rules them all!

function modifiedSum(a, n) {
    return a.reduce((sum, index) => Math.pow(index, n) + sum, 0) - a.reduce((sum, index) => sum + index, 0)
}
/*
Example 1: Input: { 1, 2, 3 }, 3 -- > (1 ^ 3 + 2 ^ 3 + 3 ^ 3) - (1 + 2 + 3)-- > 36 - 6 -- > Output: 30

Example 2: Input: { 1, 2 }, 5 -- > (1 ^ 5 + 2 ^ 5) - (1 + 2)-- > 33 - 3 -- > Output: 30
*/

//-----------------------------------------------------------------------------

//Say hello!

function modifiedSum(a, n) {
    return a.reduce((sum, index) => Math.pow(index, n) + sum, 0) - a.reduce((sum, index) => sum + index, 0)
}

//-----------------------------------------------------------------------------

//Greet Me

function greet(n) {
    n = n.toLowerCase();
    var name = n.charAt(0).toUpperCase() + n.slice(1);
    return `Hello ${name}!`
};

"riley" -- > "Hello Riley!"
"JACK"  -- > "Hello Jack!"

//-----------------------------------------------------------------------------

//Mr Martingale

function martingale(bank, outcomes) {
    var bet = 100;
    for (let i = 0; i < outcomes.length; i++) {
        if (outcomes[i] == 1) {
            bank += bet;
            bet = 100;
        }
        else if (outcomes[i] == 0) {
            bank -= bet;
            bet = bet * 2;
        }
    }
    return bank;
}
/*
martingale(1000, [1, 1, 0, 0, 1]) === 1300
you win your 1st round: gain $100, balance = 1100
win 2nd round: gain $100, balance = 1200
lose 3rd round: lose $100 dollars, balance = 1100
double stake for 4th round and lost: staked $200, lose $200, balance = 900
double stake for 5th round and won: staked $400 won $400, balance = 1300
*/

//-----------------------------------------------------------------------------

//Largest pair sum in array

function largestPairSum(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1] + numbers[numbers.length - 2]
}

//-----------------------------------------------------------------------------

//London CityHacker

function londonCityHacker(journey) {
    var result = 0;
    for (let i = 0; i < journey.length; i++) {
        if (!isNaN(journey[i]) && !isNaN(journey[i + 1])) {
            result += 1.5;
            i++;
        } else if (isNaN(journey[i])) {
            result += 2.4;
        } else {
            result += 1.5;
        }
    }
    return `£${result.toFixed(2)}`;
}

//-----------------------------------------------------------------------------

//Sliding Puzzle Verification

function isSolved(board) {
    var trueBoard = board.reduce((total, index) => total.concat(index), [])
    for (let i = 0; i < trueBoard.length - 1; i++) {
        if (trueBoard[i] + 1 != trueBoard[i + 1]) return false;
    }
    return true;
}

//-----------------------------------------------------------------------------

//Sentences should start with capital letters.

function fix(paragraph) {
    return arr = paragraph.split(". ").map(i => i[0].toUpperCase() + i.slice(1)).join(". ").trim();
}
/*
"hello. my name is inigo montoya. you killed my father. prepare to die." 
    => "Hello. My name is inigo montoya. You killed my father. Prepare to die."
*/

//-----------------------------------------------------------------------------

//Array element parity

function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(-arr[i])) continue;
        else return arr[i]
    }
}
/*
[1, -1, 2, -2, 3] => 3
[-3, 1, 2, 3, -1, -4, -2] => -4
*/

//-----------------------------------------------------------------------------

//Which triangle is that ?

function typeOfTriangle(sideA, sideB, sideC) {
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
        if (sideA == sideB && sideB == sideC) return "Equilateral";
        if (sideA == sideC || sideC == sideB || sideB == sideA) return "Isosceles";
        return "Scalene"
    }
    return "Not a valid triangle"
}

//-----------------------------------------------------------------------------

//Longest vowel chain
function solve(s) {
    return (s.split(/[^aeiou]/).reduce((max, i) => Math.max(max, i.length), 0));
}