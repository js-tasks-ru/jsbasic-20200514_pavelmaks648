/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return n = 1
    };

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    };
    return result
}