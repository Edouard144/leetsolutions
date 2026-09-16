/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1000000007;

    // free[j]: j completed segments; current point is not an endpoint
    // end[j]: j completed segments; current point is the right endpoint
    let free = new Array(k + 1).fill(0);
    let end = new Array(k + 1).fill(0);

    free[0] = 1;

    for (let points = 2; points <= n; points++) {
        const nextFree = new Array(k + 1).fill(0);
        const nextEnd = new Array(k + 1).fill(0);

        for (let segments = 0; segments <= k; segments++) {
            // Do not make the new point an endpoint.
            nextFree[segments] = (free[segments] + end[segments]) % MOD;

            // Make the new point the right endpoint of a segment.
            nextEnd[segments] = end[segments];

            if (segments > 0) {
                nextEnd[segments] =
                    (nextEnd[segments] + free[segments - 1] + end[segments - 1]) % MOD;
            }
        }

        free = nextFree;
        end = nextEnd;
    }

    return (free[k] + end[k]) % MOD;
};