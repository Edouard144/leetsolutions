/**
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    let i = m - 1;     // Last valid element in nums1
    let j = n - 1;     // Last element in nums2
    let k = m + n - 1; // Last position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
}