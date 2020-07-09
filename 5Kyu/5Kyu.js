//-----------------------------------------------------------------

//Calculating with Functions

function zero(operator) {
  return operator ? operator(0) : 0;
}

function one(operator) {
  return operator ? operator(1) : 1;
}

function two(operator) {
  return operator ? operator(2) : 2;
}

function three(operator) {
  return operator ? operator(3) : 3;
}

function four(operator) {
  return operator ? operator(4) : 4;
}

function five(operator) {
  return operator ? operator(5) : 5;
}

function six(operator) {
  return operator ? operator(6) : 6;
}

function seven(operator) {
  return operator ? operator(7) : 7;
}
function eight(operator) {
  return operator ? operator(8) : 8;
}

function nine(operator) {
  return operator ? operator(9) : 9;
}

function plus(b) { return function (a) { return Math.floor(a + b); }; };
function minus(b) { return function (a) { return Math.floor(a - b); }; };
function times(b) { return function (a) { return Math.floor(a * b); }; };
function dividedBy(b) { return function (a) { return Math.floor(a / b); }; };

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

//-----------------------------------------------------------------------------

//How the Grinch Almost Ended Christmas

function prioritizeMissiles(missiles) {
  missiles.sort(timeSort);
  return missiles.map(missile => missile.name)
}

function timeSort(missileA, missileB) {
  return missileA.distance / missileA.speed - missileB.distance / missileB.speed;
}

//-----------------------------------------------------------------------------

//Regex Password Validation

function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}

/*
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number

^               # start of input 
(?=.*?[A-Z])    # Lookahead to make sure there is at least one upper case letter
(?=.*?[a-z])    # Lookahead to make sure there is at least one lower case letter
(?=.*?[0-9])    # Lookahead to make sure there is at least one number
[A-Za-z0-9]{6,} # Make sure there are at least 6 characters of [A-Za-z0-9]
$               # end of input
*/

//-----------------------------------------------------------------------------

//Common Denominators

function convertFrac(lst) {
  var cd = lst.map(i => i[1]).reduce((value, i) => lcm(value, i), 1);
  var array = lst.map(i => cd / i[1] * i[0]);
  var result = array.map(i => i + "," + cd).map(i => `(${i})`).join("");
  return result;
}

function gcd(a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

let lcm = (n1, n2) => {
  //Find the gcd first 
  let g = gcd(n1, n2);

  //then calculate the lcm
  return (n1 * n2) / g;
}

convertFracs[(1, 2), (1, 3), (1, 4)]`shouldBe`[(6, 12), (4, 12), (3, 12)]

//-----------------------------------------------------------------------------

//Directions Reduction

function dirReduc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH" || arr[i] == "SOUTH" && arr[i + 1] == "NORTH" ||
      arr[i] == "EAST" && arr[i + 1] == "WEST" || arr[i] == "WEST" && arr[i + 1] == "EAST") {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr;
}

//#2
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, '');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

/*
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] => ["WEST"]
["NORTH", "WEST", "SOUTH", "EAST"] => ["NORTH", "WEST", "SOUTH", "EAST"]
*/

//-----------------------------------------------------------------------------

//Beeramid

function beeramid(bonus, price) {
  if (bonus < price) return 0;
  if (bonus == price) return 1;
  var beers = Math.floor(bonus / price);
  var total = 0;
  var previous = 0;
  for (let i = 1; i <= beers; i++) {
    total += Math.pow(i, 2);
    if (total >= beers) return i - 1;
  }
}

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

//-----------------------------------------------------------------------------

//Rot13

function rot13(message) {
  var result = ''
  for (let i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) <= 122 && message.charCodeAt(i) >= 97) {
      if (message.charCodeAt(i) + 13 <= 122) result += String.fromCharCode(message.charCodeAt(i) + 13);
      else result += String.fromCharCode(13 - (122 - message.charCodeAt(i)) + 96);
    } else if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      if (message.charCodeAt(i) + 13 <= 90) result += String.fromCharCode(message.charCodeAt(i) + 13);
      else result += String.fromCharCode(13 - (90 - message.charCodeAt(i)) + 64);
    } else result += message[i]
  }

  return result;
}

//#2
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

//-----------------------------------------------------------------------------

//Largest product in a series

function greatestProduct(input) {
  if (input.length < 5) return 0;
  var arr = input.split("");
  var max = 0;
  for (let i = 4; i <= arr.length - 1; i++) {
    var temp = arr[i] * arr[i - 1] * arr[i - 2] * arr[i - 3] * arr[i - 4];
    if (temp > max) max = temp;
  }

  return max;
}

greatestProduct("123834539327238239583") // should return 3240

//-----------------------------------------------------------------------------

//Gap in Primes

function gap(g, m, n) {
  var lastPrime = 0;
  var gap = 0;
  var result = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      gap = i - lastPrime;

      if (gap == g) {
        result.push(lastPrime);
        result.push(i);
        return result;
      }

      lastPrime = i;
    }
  }
  return null;
}

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}

//-----------------------------------------------------------------------------

//Emirps

function findEmirp(n) {
  var count = 0;
  var max = 0;
  var sum = 0;
  var result = [];
  for (let i = 1; i < n; i++) {
    if (isPrime(i) && i > 10 && i != palindrome(i) && isPrime(palindrome(i))) {
      count++;
      result.push(i);
    }
  }

  if (result.length > 0) {
    sum = result.reduce((sum, index) => sum + index);
    max = Math.max(...result);
  }

  return [count, max, sum]
}

const palindrome = num => {
  return parseInt(num.toString().split("").reverse().join(""));
}

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}