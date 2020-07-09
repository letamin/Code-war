/************** 8 Kyu **************/

//Find the first first non-consecutive number:

function firstNonConsecutive(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] + 1 != array[i + 1]) return array[i + 1];
  }
  return null;
}

firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]);

//-----------------------------------------------------------------------------

//Array plus array:

function arrayPlusArray(arr1, arr2) {
  var sum = 0;
  for (let i in arr1) {
    sum += arr1[i];
  }
  for (let i in arr1) {
    sum += arr2[i];
  }
  return sum;
}

//#2
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
/*
arrayPlusArray([1, 2, 3], [4, 5, 6]) => 21;
*/
//-----------------------------------------------------------------------------

//Beginner Series #2 Clock:

function past(h, m, s) {
  return s * 1000 + m * 60000 + h * 3600000
}

past(0, 1, 1) == 61000

//-----------------------------------------------------------------------------

//Take the Derivative:

function derive(coefficient, exponent) {
  return coefficient * exponent + "x^" + (exponent - 1);
}
/*
derive(7, 8) --> this should output "56x^7"
derive(5, 9) --> this should output "45x^8"
*/

//-----------------------------------------------------------------------------

//Expressions Matter:

function expressionMatter(a, b, c) {
  let max1 = (a + b + c > (a + b) * c ? a + b + c : (a + b) * c)
  let max2 = (a * b * c > a * (b + c) ? a * b * c : a * (b + c))
  return (max1 > max2 ? max1 : max2)
}
/*
expressionsMatter(1,2,3)  ==>  return 9
expressionsMatter(1,1,1)  ==>  return 3
*/

//-----------------------------------------------------------------------------

//Total amount of points:

function points(games) {
  var total = 0;
  for (let i = 0; i < games.length; i++) {
    var res = games[i].split(':');
    if (res[0] > res[1]) {
      total += 3;
    } else if (res[0] == res[1]) {
      total += 1;
    }
  }
  return total;
}

//#2
const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0);
/*    
points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) => 30 points in total
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) => 10 points in total
*/

//-----------------------------------------------------------------------------

//Abbreviate a Two Word Name

function abbrevName(name) {
  var a = name.toUpperCase();
  var b = a.split(" ");
  return (b[0][0] + '.' + b[1][0]);
}

//-----------------------------------------------------------------------------

//Beginner Series #1 School Paperwork

function paperwork(n, m) {
  return (n >= 0 && m >= 0) ? n * m : 0;
}

paperwork(5, 5) == 25

//-----------------------------------------------------------------------------

//You only need one - Beginner

function check(a, x) {
  return a.includes(x);
};


//-----------------------------------------------------------------------------

//Sum of positive

function positiveSum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) == 1) {
      sum += arr[i];
    }
  }
  return sum;
}

//#2
function positiveSum(arr) {
  return arr.reduce((sum, current) => sum += (current > 0) ? current : 0, 0);
}
/*
[1,-4,7,12] => 1 + 7 + 12 = 20
*/

//-----------------------------------------------------------------------------

//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  var newStr = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toUpperCase()) {
      newStr += this[i].toLowerCase();
    } else {
      newStr += this[i].toUpperCase();
    }
  }
  return newStr;
}

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//-----------------------------------------------------------------------------

//Is the string uppercase?

String.prototype.isUpperCase = function () {
  return this == this.toUpperCase()
}

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

//-----------------------------------------------------------------------------

//SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
  var sumA = 0, sumB = 0;
  for (let i = 0; i < a.length; i++) {
    sumA += a[i] * a[i];
  }

  for (let i = 0; i < b.length; i++) {
    sumB += b[i] * b[i] * b[i];
  }

  return sumA > sumB
}

//#2
function arrayMadness(a, b) {
  return (a.reduce((sum, index) => sum + index * index, 0) > b.reduce((sum, index) => sum + index * index * index, 0))
}

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

//-----------------------------------------------------------------------------

//Polish alphabet

function correctPolishLetters(string) {
  var newStr = string.split("");
  for (let i = 0; i < newStr.length; i++) {
    switch (string[i]) {
      case 'ą': newStr[i] = 'a'; break;
      case 'ć': newStr[i] = 'c'; break;
      case 'ę': newStr[i] = 'e'; break;
      case 'ł': newStr[i] = 'l'; break;
      case 'ń': newStr[i] = 'n'; break;
      case 'ó': newStr[i] = 'o'; break;
      case 'ś': newStr[i] = 's'; break;
      case 'ź': newStr[i] = 'z'; break;
      case 'ż': newStr[i] = 'z'; break;
      default: newStr[i];
    }
  }
  return (newStr.join(""));
}
/*
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

then "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

//-----------------------------------------------------------------------------

//All Star Code Challenge #18

function strCount(str, letter) {
  return [...str].reduce((count, index) => count += index == letter ? 1 : 0, 0)
}

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z')      // => 0

//-----------------------------------------------------------------------------

//Is it even?

function testEven(n) {
  return n % 2 === 0;
}

//-----------------------------------------------------------------------------

//Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) return true;
  else return false;
};
/*
zeroFuel(50, 25, 2) => true
zeroFuel(100, 50, 1) => false
*/

//-----------------------------------------------------------------------------

//Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages) {
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}

//-----------------------------------------------------------------------------

//Removing Elements

function removeEveryOther(arr) {
  var newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      newArray.push(arr[i])
    }
  }
  return (newArray)
}
/*
myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
*/
//-----------------------------------------------------------------------------

//Is he gonna survive?

function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}
/*
hero(10, 5) => true
hero(1500, 751) => false
*/

//-----------------------------------------------------------------------------

//Number toString

var a = (123).toString();

//-----------------------------------------------------------------------------

//L1: Bartender, drinks!

function getDrinkByProfession(param) {
  let map = new Map([
    ["jabroni", "Patron Tequila"],
    ["school counselor", "Anything with Alcohol"],
    ["programmer", "Hipster Craft Beer"],
    ["bike gang member", "Moonshine"],
    ["politician", "Your tax dollars"],
    ["rapper", "Cristal"]
  ]);

  let normal = param.toLowerCase();
  return map.has(normal) ? map.get(normal) : "Beer";
}

//#2
function getDrinkByProfession(param) {
  param = param.toLowerCase();

  switch (param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

/*
input	                  Output
"Jabroni"	              "Patron Tequila"
"School Counselor"	      "Anything with Alcohol"
 "Programmer"	          "Hipster Craft Beer"
 "Bike Gang Member"	      "Moonshine" 
 "Politician"	          "Your tax dollars" 
 "Rapper"	              "Cristal" 
 *anything else*	      "Beer" 
*/

//-----------------------------------------------------------------------------

//get ascii value of character

function getASCII(c) {
  return c.charCodeAt(0)
}

//-----------------------------------------------------------------------------

//You Can't Code Under Pressure #1

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

//-----------------------------------------------------------------------------

//Watermelon

function divide(weight) {
  return weight > 2 ? (weight - 2) % 2 == 0 : false
}

divide(2) === false // 2 = 1 + 1
divide(3) === false // 3 = 1 + 2
divide(4) === true  // 4 = 2 + 2
divide(5) === false // 5 = 2 + 3
divide(6) === true  // 6 = 2 + 4

//-----------------------------------------------------------------------------

//Triple Trouble

function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one[i] + two[i] + three[i]
  }
  return result
}
/*
tripleTrouble("this","test","lock") => "ttlheoiscstk"
tripleTrouble("aa","bb","cc") => "abcabc"
*/

//-----------------------------------------------------------------------------

//Grasshopper - Summation

var summation = function (num) {
  var sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
/*
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
//-----------------------------------------------------------------------------

//Opposite number

function opposite(number) {
  return (-number);
}

//-----------------------------------------------------------------------------

//Century From Year

function century(year) {
  return Math.ceil(year / 100);
}
/*
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
*/

//-----------------------------------------------------------------------------

//Is n divisible by x and y?

function isDivisible(n, x, y) {
  return (n % x) == 0 && (n % y) == 0;
}
/*
n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5
*/

//-----------------------------------------------------------------------------

//Grasshopper - Terminal game move function

function move(position, roll) {
  // return the new position
  return position + roll * 2;
}
/*
move(3, 6) should equal 15
*/

//-----------------------------------------------------------------------------

//Convert a Number to a String!

function numberToString(num) {
  return num.toString();
}

//-----------------------------------------------------------------------------

//Welcome!

function greet(language) {
  var langs = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
  };
  return langs[language] || 'Welcome'
}