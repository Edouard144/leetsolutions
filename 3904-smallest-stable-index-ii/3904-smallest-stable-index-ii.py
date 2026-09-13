class Solution(object):
    def firstStableIndex(self, nums, k):
        n = len(nums)

        prefMax = [0] * n
        suffMin = [0] * n

        prefMax[0] = nums[0]
        for i in range(1, n):
            prefMax[i] = max(prefMax[i - 1], nums[i])

        suffMin[n - 1] = nums[n - 1]
        for i in range(n - 2, -1, -1):
            suffMin[i] = min(suffMin[i + 1], nums[i])

        for i in range(n):
            if prefMax[i] - suffMin[i] <= k:
                return i

        return -1