class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        # Take the first string as reference
        first = strs[0]

        for i in range(len(first)):
            ch = first[i]
            # Compare this character with same index in all other strings
            for s in strs[1:]:
                # If index out of range or mismatch, prefix ends before i
                if i == len(s) or s[i] != ch:
                    return first[:i]

        # Whole first string is a common prefix
        return first
