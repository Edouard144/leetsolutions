from bisect import bisect_left

class Solution(object):
    def maximumWeight(self, intervals):
        arr = []
        for i, (l, r, w) in enumerate(intervals):
            arr.append((r, l, w, i))
        arr.sort()

        ends = [r for r, l, w, i in arr]
        n = len(arr)

        prev = []
        for i, (r, l, w, idx) in enumerate(arr):
            j = bisect_left(ends, l) - 1
            prev.append(j)

        # dp[k][i] = best pair using first i intervals, taking exactly k intervals
        # stored as (score, tuple_of_indices_in_ascending_order)
        dp_score = [[0] * (n + 1) for _ in range(5)]
        dp_path = [[() for _ in range(n + 1)] for _ in range(5)]

        def better(a_score, a_path, b_score, b_path):
            if a_score != b_score:
                return a_score > b_score
            return a_path < b_path

        for k in range(1, 5):
            for i in range(1, n + 1):
                # skip interval i-1
                s1, p1 = dp_score[k][i - 1], dp_path[k][i - 1]

                # take interval i-1
                r, l, w, idx = arr[i - 1]
                j = prev[i - 1] + 1
                s2 = dp_score[k - 1][j] + w
                p2 = tuple(sorted(dp_path[k - 1][j] + (idx,)))

                if better(s2, p2, s1, p1):
                    dp_score[k][i] = s2
                    dp_path[k][i] = p2
                else:
                    dp_score[k][i] = s1
                    dp_path[k][i] = p1

        ans_score = 0
        ans_path = ()
        for k in range(1, 5):
            if better(dp_score[k][n], dp_path[k][n], ans_score, ans_path):
                ans_score = dp_score[k][n]
                ans_path = dp_path[k][n]

        return list(ans_path)