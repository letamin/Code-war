function findEvenIndex(arr) {
    if (sum(arr) == 0) return 0;
    for (let i = 0; i < arr.length; i++) {
        var left = sum(arr.slice(0, i));
        var right = sum(arr.slice(i + 1));
        if (left == right) return i;
    }
    return -1;
}

function sum(arr) {
    return arr.reduce((sum, index) => sum + index, 0)
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]))