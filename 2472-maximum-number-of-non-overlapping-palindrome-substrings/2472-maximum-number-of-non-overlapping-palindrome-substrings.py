class Solution:
    def maxPalindromes(self, s: str, k: int) -> int:
        n = len(s)

        # dp[i] = maximum number of valid palindromes
        # using the prefix s[0:i]
        dp = [0] * (n + 1)

        # palindrome[left][right] tells whether s[left:right + 1] is a palindrome
        palindrome = [[False] * n for _ in range(n)]

        for right in range(n):
            for left in range(right, -1, -1):
                if s[left] == s[right] and (
                    right - left <= 2 or palindrome[left + 1][right - 1]
                ):
                    palindrome[left][right] = True

                    length = right - left + 1

                    if length >= k:
                        dp[right + 1] = max(
                            dp[right + 1],
                            dp[left] + 1
                        )

            # Skip s[right]
            dp[right + 1] = max(dp[right + 1], dp[right])

        return dp[n]