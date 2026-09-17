function climbStairs(n: number): number {
    // 1 way to reach step 1; 2 ways to reach step 2
    let prev = 1;
    let current = 2;

    for (let step = 3; step <= n; step++) {
        const next = prev + current;
        prev = current;
        current = next;
    }

    return n === 1 ? prev : current;
}