function persistence(num) {
    var count = 0;
    while (num >= 10) {
        num = num.toString().split("").reduce((value, i) => value * i, 1);
        count++;
    };
    return count;
}
console.log(persistence(39))