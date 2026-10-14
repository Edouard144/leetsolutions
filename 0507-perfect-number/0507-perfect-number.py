class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num <= 1:
            return False

        total = 1  # 1 is always a proper divisor for num > 1

        i = 2
        while i * i <= num:
            if num % i == 0:
                total += i
                other = num // i

                if other != i:
                    total += other

            i += 1

        return total == num