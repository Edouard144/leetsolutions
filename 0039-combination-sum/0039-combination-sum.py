class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        res = []
        candidates.sort()  # optional, helps with pruning

        def backtrack(start, current, total):
            if total == target:
                res.append(current[:])
                return
            if total > target:
                return

            for i in range(start, len(candidates)):
                c = candidates[i]
                # include candidates[i]
                current.append(c)
                # stay at i because we can reuse the same element
                backtrack(i, current, total + c)
                current.pop()  # backtrack

        backtrack(0, [], 0)
        return res