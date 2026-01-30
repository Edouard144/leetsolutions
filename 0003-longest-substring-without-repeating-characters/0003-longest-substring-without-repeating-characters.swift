class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        // Map from character to its last seen index
        var lastSeen: [Character: Int] = [:]
        
        let chars = Array(s)
        var left = 0          // left bound of current window
        var maxLen = 0
        
        for right in 0..<chars.count {
            let c = chars[right]
            
            if let prevIndex = lastSeen[c], prevIndex >= left {
                // Move left just past the previous occurrence of this character
                left = prevIndex + 1
            }
            
            // Update last seen index for this character
            lastSeen[c] = right
            
            // Window length = right - left + 1
            maxLen = max(maxLen, right - left + 1)
        }
        
        return maxLen
    }
}
