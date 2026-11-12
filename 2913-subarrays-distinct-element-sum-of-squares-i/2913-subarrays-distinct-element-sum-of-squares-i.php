class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sumCounts(array $nums): int {
        $n = count($nums);
        $total = 0;

        for ($i = 0; $i < $n; $i++) {
            $seen = [];

            for ($j = $i; $j < $n; $j++) {
                $seen[$nums[$j]] = true;

                $distinct = count($seen);
                $total += $distinct * $distinct;
            }
        }

        return $total;
    }
}