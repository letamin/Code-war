const catchSignChange = input => {

    var result = 0;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] == 0) input[i] = 1;
        if (Math.sign(input[i]) != Math.sign(input[i + 1])) {
            result++;
            i++;
        };
    }
    return result
};

console.log((catchSignChange([-7, -7, 7, 0])))