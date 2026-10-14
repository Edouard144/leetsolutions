/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Use BigInt to avoid overflow for large n
        const coinsNeeded = BigInt(mid) * BigInt(mid + 1) / 2n;

        if (coinsNeeded <= BigInt(n)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
};