function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);

    const result: number[][] = [];
    const current: number[] = [];

    function backtrack(start: number, remaining: number): void {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Avoid duplicate combinations at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            // Since the array is sorted, later values will also be too large
            if (candidates[i] > remaining) {
                break;
            }

            current.push(candidates[i]);

            // i + 1 ensures each array element is used at most once
            backtrack(i + 1, remaining - candidates[i]);

            current.pop();
        }
    }

    backtrack(0, target);
    return result;
}