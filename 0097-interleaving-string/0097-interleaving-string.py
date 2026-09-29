class Solution(object):
    def isInterleave(self, s1, s2, s3):
        if len(s1) + len(s2) != len(s3):
            return False

        # Use s2 for the DP columns
        dp = [False] * (len(s2) + 1)
        dp[0] = True

        # Case where we use only s2
        for j in range(1, len(s2) + 1):
            dp[j] = dp[j - 1] and s2[j - 1] == s3[j - 1]

        for i in range(1, len(s1) + 1):
            # Case where we use only s1
            dp[0] = dp[0] and s1[i - 1] == s3[i - 1]

            for j in range(1, len(s2) + 1):
                k = i + j - 1

                use_s1 = dp[j] and s1[i - 1] == s3[k]
                use_s2 = dp[j - 1] and s2[j - 1] == s3[k]

                dp[j] = use_s1 or use_s2

        return dp[len(s2)]