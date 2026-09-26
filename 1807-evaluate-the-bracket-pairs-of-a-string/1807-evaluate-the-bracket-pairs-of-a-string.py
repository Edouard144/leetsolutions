class Solution(object):
    def evaluate(self, s, knowledge):
        values = {key: value for key, value in knowledge}
        result = []
        i = 0

        while i < len(s):
            if s[i] != '(':
                result.append(s[i])
                i += 1
            else:
                j = s.index(')', i)
                key = s[i + 1:j]
                result.append(values.get(key, '?'))
                i = j + 1

        return ''.join(result)