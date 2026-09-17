/**
 * Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // 1. Transpose: swap across the main diagonal
    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            [matrix[row][col], matrix[col][row]] =
                [matrix[col][row], matrix[row][col]];
        }
    }

    // 2. Reverse every row
    for (const row of matrix) {
        row.reverse();
    }
}