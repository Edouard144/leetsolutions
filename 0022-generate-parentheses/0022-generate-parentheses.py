class Solution(object):
    def generateParenthesis(self, n):
        res = []

        def backtrack(path, open_used, close_used):
            if len(path) == 2 * n:
                res.append("".join(path))
                return

            if open_used < n:
                path.append("(")
                backtrack(path, open_used + 1, close_used)
                path.pop()

            if close_used < open_used:
                path.append(")")
                backtrack(path, open_used, close_used + 1)
                path.pop()

        backtrack([], 0, 0)
        return res