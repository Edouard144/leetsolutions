class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minOperations($s) {
        $n = strlen($s);

        $chars = str_split($s);
        sort($chars);
        $sorted = implode('', $chars);

        // Already sorted
        if ($s === $sorted) {
            return 0;
        }

        // With only two characters, a proper substring has length 1,
        // so sorting cannot change anything.
        if ($n === 2) {
            return -1;
        }

        // Find the first and last positions where s differs from sorted(s)
        $left = 0;
        while ($s[$left] === $sorted[$left]) {
            $left++;
        }

        $right = $n - 1;
        while ($s[$right] === $sorted[$right]) {
            $right--;
        }

        // If the mismatched section is a proper substring,
        // sorting exactly that section finishes the string in one operation.
        if ($left > 0 || $right < $n - 1) {
            return 1;
        }

        // The whole string is mismatched.
        $minChar = $sorted[0];
        $maxChar = $sorted[$n - 1];

        $minInProperPrefix = false;
        for ($i = 0; $i < $n - 1; $i++) {
            if ($s[$i] === $minChar) {
                $minInProperPrefix = true;
                break;
            }
        }

        $maxInProperSuffix = false;
        for ($i = 1; $i < $n; $i++) {
            if ($s[$i] === $maxChar) {
                $maxInProperSuffix = true;
                break;
            }
        }

        if ($minInProperPrefix || $maxInProperSuffix) {
            return 2;
        }

        return 3;
    }
}