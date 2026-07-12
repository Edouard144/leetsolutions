class Solution:
    def arrayRankTransform(self, arr):
        rank = {}

        # Sort unique values
        for num in sorted(set(arr)):
            rank[num] = len(rank) + 1

        # Replace with ranks
        return [rank[num] for num in arr]