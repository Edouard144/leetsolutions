class Solution {
    func sortColors(_ nums: inout [Int]) {
        var low = 0              // next position for 0
        var mid = 0              // current index
        var high = nums.count-1  // next position for 2

        while mid <= high {
            if nums[mid] == 0 {
                nums.swapAt(low, mid)
                low += 1
                mid += 1
            } else if nums[mid] == 2 {
                nums.swapAt(mid, high)
                high -= 1
                // do NOT increase mid here, need to re-check swapped value
            } else { // nums[mid] == 1
                mid += 1
            }
        }
    }
}