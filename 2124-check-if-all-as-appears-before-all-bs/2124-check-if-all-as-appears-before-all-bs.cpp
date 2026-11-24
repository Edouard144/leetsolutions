class Solution {
public:
    bool checkString(string s) {
        bool seenB = false;

        for (char c : s) {
            if (c == 'b') {
                seenB = true;
            } else if (seenB) {
                // Found an 'a' after a 'b'
                return false;
            }
        }

        return true;
    }
};