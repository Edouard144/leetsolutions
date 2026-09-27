class Solution(object):
    def reverseParentheses(self, s):
        stack = []

        for ch in s:
            if ch == ')':
                # Collect everything after the matching '('
                current = []

                while stack[-1] != '(':
                    current.append(stack.pop())

                # Remove the '('
                stack.pop()

                # Add the reversed substring back
                stack.extend(current)

            else:
                stack.append(ch)

        return ''.join(stack)