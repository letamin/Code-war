/*
https://www.codewars.com/kata/5bce125d3bb2adff0d000245
*/

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