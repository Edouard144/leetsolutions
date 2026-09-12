class Solution(object):
    def myPow(self, x, n):
        if n == 0:
            return 1.0

        exp = n
        if exp < 0:
            x = 1.0 / x
            exp = -exp

        ans = 1.0
        while exp > 0:
            if exp & 1:
                ans *= x
            x *= x
            exp >>= 1

        return ans