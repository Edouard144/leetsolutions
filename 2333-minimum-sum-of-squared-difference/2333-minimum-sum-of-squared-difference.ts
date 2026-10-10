function minSumSquareDiff(
    nums1: number[],
    nums2: number[],
    k1: number,
    k2: number
): number {
    const n = nums1.length;
    const diffs = new Array<number>(n);

    let maxDiff = 0;
    for (let i = 0; i < n; i++) {
        diffs[i] = Math.abs(nums1[i] - nums2[i]);
        maxDiff = Math.max(maxDiff, diffs[i]);
    }

    let k = k1 + k2;

    const operationsNeeded = (target: number): number => {
        let ops = 0;
        for (const d of diffs) {
            if (d > target) {
                ops += d - target;
            }
        }
        return ops;
    };

    let lo = 0;
    let hi = maxDiff;

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (operationsNeeded(mid) <= k) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    const target = lo;

    for (let i = 0; i < n; i++) {
        if (diffs[i] > target) {
            k -= diffs[i] - target;
            diffs[i] = target;
        }
    }

    diffs.sort((a, b) => b - a);

    let i = 0;
    while (k > 0 && i < n && diffs[i] > 0) {
        let j = i;

        while (j < n && diffs[j] === diffs[i]) {
            j++;
        }

        const count = j - i;
        const nextValue = j < n ? diffs[j] : 0;
        const gap = diffs[i] - nextValue;
        const needed = count * gap;

        if (k >= needed) {
            k -= needed;
            for (let t = i; t < j; t++) {
                diffs[t] = nextValue;
            }
            i = j;
        } else {
            const fullLevels = Math.floor(k / count);
            const remainder = k % count;

            for (let t = i; t < j; t++) {
                diffs[t] -= fullLevels;
            }

            for (let t = i; t < i + remainder; t++) {
                diffs[t] -= 1;
            }

            k = 0;
        }
    }

    let answer = 0;
    for (const d of diffs) {
        answer += d * d;
    }

    return answer;
}