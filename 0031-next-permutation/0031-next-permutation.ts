/**
 * Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;

    // 1. Find the first decreasing element from the right.
    let pivot = n - 2;

    while (pivot >= 0 && nums[pivot] >= nums[pivot + 1]) {
        pivot--;
    }

    // 2. Find the smallest element larger than nums[pivot].
    if (pivot >= 0) {
        let successor = n - 1;

        while (nums[successor] <= nums[pivot]) {
            successor--;
        }

        [nums[pivot], nums[successor]] =
            [nums[successor], nums[pivot]];
    }

    // 3. Reverse the suffix to make it as small as possible.
    let left = pivot + 1;
    let right = n - 1;

    while (left < right) {
        [nums[left], nums[right]] =
            [nums[right], nums[left]];

        left++;
        right--;
    }
}