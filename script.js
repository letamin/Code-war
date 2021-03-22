const sumSquareEvenRootOdd = ns => {
    let res = [];
    for (const num of ns) {
        if (num % 2 == 0) res.push(num * num);
        else res.push(Math.sqrt(num));
    }

    return res.reduce((e, v) => e += v, 0).toFixed(2);
};