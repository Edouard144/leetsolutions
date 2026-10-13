/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const squares = nums.map(x => Math.abs(x) * Math.abs(x));
    squares.sort((a, b) => a - b);

    let ans = 0;
    const n = squares.length;

    // Smaller half: subtract
    for (let i = 0; i < Math.floor(n / 2); i++) {
        ans -= squares[i];
    }

    // Larger half: add
    for (let i = Math.floor(n / 2); i < n; i++) {
        ans += squares[i];
    }

    return ans;
};