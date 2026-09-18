function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 1;
    let right = Math.floor(x / 2);
    let answer = 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        // Divide instead of multiplying to avoid overflow.
        if (mid <= Math.floor(x / mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}