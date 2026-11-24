class Solution {
public:
    int minimizeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();

        // Change the two smallest, two largest, or one of each.
        int option1 = nums[n - 1] - nums[2];       // change nums[0], nums[1]
        int option2 = nums[n - 3] - nums[0];       // change nums[n-1], nums[n-2]
        int option3 = nums[n - 2] - nums[1];       // change nums[0], nums[n-1]

        return min({option1, option2, option3});
    }
};