class Solution {
public:
    bool isPalindrome(int x) {
        // Negative numbers and numbers ending with 0 (but not 0 itself) are not palindromes
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;

        int reversedHalf = 0;
        // Build reversed second half of the number
        while (x > reversedHalf) {
            int digit = x % 10;
            reversedHalf = reversedHalf * 10 + digit;
            x /= 10;
        }

        // For even length: x == reversedHalf
        // For odd length: x == reversedHalf / 10 (middle digit ignored)
        return (x == reversedHalf) || (x == reversedHalf / 10);
    }
};
