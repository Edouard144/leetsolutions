class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestMonotonicSubarray(array $nums): int {
        $n = count($nums);

        $inc = 1;   // current strictly increasing run length
        $dec = 1;   // current strictly decreasing run length
        $ans = 1;

        for ($i = 1; $i < $n; $i++) {
            if ($nums[$i] > $nums[$i - 1]) {
                $inc++;
                $dec = 1;
            } elseif ($nums[$i] < $nums[$i - 1]) {
                $dec++;
                $inc = 1;
            } else {
                // Equal values break both strictly monotonic runs
                $inc = 1;
                $dec = 1;
            }

            $ans = max($ans, $inc, $dec);
        }

        return $ans;
    }
}