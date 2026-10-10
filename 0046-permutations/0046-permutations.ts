function permute(nums: number[]): number[][] {
    const result: number[][] = [];
    const current: number[] = [];
    const used = new Array<boolean>(nums.length).fill(false);

    function backtrack(): void {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            current.push(nums[i]);

            backtrack();

            current.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
}