/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const parts = [];

    const backtrack = (start) => {
        if (parts.length === 4) {
            if (start === s.length) {
                result.push(parts.join("."));
            }
            return;
        }

        const remainingParts = 4 - parts.length;
        const remainingChars = s.length - start;

        if (
            remainingChars < remainingParts ||
            remainingChars > remainingParts * 3
        ) {
            return;
        }

        for (let length = 1; length <= 3; length++) {
            if (start + length > s.length) break;

            const segment = s.slice(start, start + length);

            // Reject leading zeros, e.g. "01" or "011".
            if (segment.length > 1 && segment[0] === "0") break;

            if (Number(segment) > 255) break;

            parts.push(segment);
            backtrack(start + length);
            parts.pop();
        }
    };

    backtrack(0);
    return result;
};