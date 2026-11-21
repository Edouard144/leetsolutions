function minimumSumSubarray(nums: number[], l: number, r: number): number {
    const n = nums.length;
    let answer = Infinity;

    for (let start = 0; start < n; start++) {
        let sum = 0;

        for (let end = start; end < n; end++) {
            sum += nums[end];
            const length = end - start + 1;

            if (length > r) break;

            if (length >= l && sum > 0) {
                answer = Math.min(answer, sum);
            }
        }
    }

    return answer === Infinity ? -1 : answer;
}