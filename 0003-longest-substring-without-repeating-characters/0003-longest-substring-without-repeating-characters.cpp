class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> lastIndex(256, -1); // store last index of each char
        int maxLen = 0;
        int left = 0;                   // start of current window

        for (int right = 0; right < (int)s.size(); ++right) {
            char c = s[right];

            // if char seen and is inside current window, move left
            if (lastIndex[c] >= left) {
                left = lastIndex[c] + 1;
            }

            lastIndex[c] = right;               // update last seen index
            maxLen = max(maxLen, right - left + 1);
        }

        return maxLen;
    }
};
