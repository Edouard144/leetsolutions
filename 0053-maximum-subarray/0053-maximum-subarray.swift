class Solution {
    func maxSubArray(_ nums: [Int]) -> Int {
        // Initialize both current and global max with the first element
        var currentMax = nums[0]
        var globalMax = nums[0]
        
        // Iterate from the second element
        for i in 1..<nums.count {
            // Either extend the previous subarray or start a new one at nums[i]
            currentMax = max(nums[i], currentMax + nums[i])
            // Update global maximum if needed
            globalMax = max(globalMax, currentMax)
        }
        
        return globalMax
    }
}