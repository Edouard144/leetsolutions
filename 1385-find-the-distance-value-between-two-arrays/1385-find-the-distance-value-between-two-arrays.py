class Solution(object):
    def findTheDistanceValue(self, arr1, arr2, d):
        """
        :type arr1: List[int]
        :type arr2: List[int]
        :type d: int
        :rtype: int
        """
        count = 0

        for a in arr1:
            valid = True

            for b in arr2:
                if abs(a - b) <= d:
                    valid = False
                    break

            if valid:
                count += 1

        return count