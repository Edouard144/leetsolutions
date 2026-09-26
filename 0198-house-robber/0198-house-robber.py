class Solution(object):
    def rob(self, nums):
        previous_two = 0  # Best result before the previous house
        previous_one = 0  # Best result up to the previous house

        for money in nums:
            current = max(previous_one, previous_two + money)
            previous_two = previous_one
            previous_one = current

        return previous_one