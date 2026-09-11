class Solution(object):
    def countAndSay(self, n):
        s = "1"

        for _ in range(n - 1):
            next_s = []
            i = 0

            while i < len(s):
                j = i
                while j < len(s) and s[j] == s[i]:
                    j += 1
                next_s.append(str(j - i))
                next_s.append(s[i])
                i = j

            s = "".join(next_s)

        return s