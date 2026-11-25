class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        int mn = *min_element(nums1.begin(), nums1.end());
        bool hasOdd = false;

        for (int x : nums1) {
            if (x & 1) hasOdd = true;
        }

        return (mn & 1) || !hasOdd;
    }
};