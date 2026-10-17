/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const digitSum = (x) => {
        let sum = 0;

        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }

        return sum;
    };

    const target = [...nums].sort((a, b) => {
        const sumA = digitSum(a);
        const sumB = digitSum(b);

        if (sumA !== sumB) {
            return sumA - sumB;
        }

        return a - b;
    });

    const position = new Map();
    target.forEach((value, index) => {
        position.set(value, index);
    });

    const n = nums.length;
    const perm = nums.map(value => position.get(value));
    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }

        let cycleSize = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = perm[j];
            cycleSize++;
        }

        swaps += cycleSize - 1;
    }

    return swaps;
};