class Solution(object):
    def maximumLengthSubstring(self, s):
        count = {}
        left = 0
        answer = 0

        for right in range(len(s)):
            ch = s[right]
            count[ch] = count.get(ch, 0) + 1

            while count[ch] > 2:
                count[s[left]] -= 1
                left += 1

            answer = max(answer, right - left + 1)

        return answer