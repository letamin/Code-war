/**
https://www.codewars.com/kata/52c31f8e6605bcc646000082

twoSum [1, 2, 3] 4 === (0, 2)
 */

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

//#2

function twoSum(numbers, sum) {
    var target = 0;
    for (let i = 0; i < numbers.length; i++) {
        target = sum - numbers[i];

        if (numbers.indexOf(target)) return [i, numbers.indexOf(target)]
    }
}