function smallest(n) {
    if (n == 1) return 1;
    else if (n == 2) return 2;
    else {
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        let res = factorial;
        while (factorial > 1 && res > n) {
            factorial--;
            let temp = factorial.toString();
            if (factorial % 2 == 0 && (temp[temp.length - 1] == "0" || temp[temp.length - 1] == "0")) {
                let temp = test(n, +factorial);
                if (temp) res = +factorial;
            }
        }

        return res;
    }
}

function test(n, fac) {
    for (let i = 1; i <= n; i++) {
        if (fac % i != 0) return false;
    }

    return true;
}

console.log(smallest(10))
