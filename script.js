function solve(n) {
    if (n == 0) return '0';
    if (n == 1) return '01'
    return solve(n) + solve(n - 1)
}
