class Solution(object):
    def maxSum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        MOD = 10**9 + 7
        BITS = 31

        # Count how many numbers have each bit set
        bit_count = [0] * BITS

        for num in nums:
            for bit in range(BITS):
                if num & (1 << bit):
                    bit_count[bit] += 1

        # Start with k zeros; distribute available bits greedily
        values = [0] * k

        for bit in range(BITS - 1, -1, -1):
            can_use = min(bit_count[bit], k)

            for i in range(can_use):
                values[i] |= 1 << bit

        answer = 0

        for value in values:
            answer = (answer + value * value) % MOD

        return answer