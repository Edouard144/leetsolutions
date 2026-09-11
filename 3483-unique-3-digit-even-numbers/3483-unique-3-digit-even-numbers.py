class Solution(object):
    def totalNumbers(self, digits):
        seen = set()
        n = len(digits)

        for i in range(n):
            if digits[i] == 0:
                continue
            for j in range(n):
                if j == i:
                    continue
                for k in range(n):
                    if k == i or k == j:
                        continue
                    if digits[k] % 2 == 0:
                        num = digits[i] * 100 + digits[j] * 10 + digits[k]
                        seen.add(num)

        return len(seen)