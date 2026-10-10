function convertToTitle(columnNumber: number): string {
    let result = "";
    let n = columnNumber;

    while (n > 0) {
        n--; // Convert from 1-based to 0-based digit
        const remainder = n % 26;
        result = String.fromCharCode(65 + remainder) + result;
        n = Math.floor(n / 26);
    }

    return result;
}