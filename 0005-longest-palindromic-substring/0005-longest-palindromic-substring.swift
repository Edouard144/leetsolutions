class Solution {
    func longestPalindrome(_ s: String) -> String {
        let chars = Array(s)
        let n = chars.count
        if n < 2 { return s }

        var start = 0
        var end = 0

        func expandAroundCenter(_ left: Int, _ right: Int) -> (Int, Int) {
            var l = left
            var r = right

            while l >= 0 && r < n && chars[l] == chars[r] {
                l -= 1
                r += 1
            }
            // when loop exits, l and r are one step beyond palindrome
            return (l + 1, r - 1)
        }

        for i in 0..<n {
            // odd-length palindrome
            let (l1, r1) = expandAroundCenter(i, i)
            if r1 - l1 > end - start {
                start = l1
                end = r1
            }

            // even-length palindrome
            let (l2, r2) = expandAroundCenter(i, i + 1)
            if r2 - l2 > end - start {
                start = l2
                end = r2
            }
        }

        return String(chars[start...end])
    }
}