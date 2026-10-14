/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    // Impossible if sum cannot be spread across num digits
    if (sum > num * 9) return "";

    const digits = new Array(num).fill(0);

    for (let i = 0; i < num; i++) {
        const d = Math.min(9, sum);
        digits[i] = d;
        sum -= d;

        if (sum === 0) break;
    }

    return digits.join("");
};
