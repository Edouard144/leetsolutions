class Solution(object):
    def isNumber(self, s):
        n = len(s)
        i = 0

        # Optional sign before the number
        if i < n and s[i] in "+-":
            i += 1

        digits_before_dot = 0

        # Digits before decimal point
        while i < n and s[i].isdigit():
            digits_before_dot += 1
            i += 1

        digits_after_dot = 0

        # Optional decimal point
        if i < n and s[i] == ".":
            i += 1

            while i < n and s[i].isdigit():
                digits_after_dot += 1
                i += 1

        # There must be at least one digit in the mantissa
        if digits_before_dot == 0 and digits_after_dot == 0:
            return False

        # Optional exponent
        if i < n and s[i] in "eE":
            i += 1

            # Optional exponent sign
            if i < n and s[i] in "+-":
                i += 1

            exponent_digits = 0

            while i < n and s[i].isdigit():
                exponent_digits += 1
                i += 1

            # Exponent must contain at least one digit
            if exponent_digits == 0:
                return False

        # All characters must be consumed
        return i == n