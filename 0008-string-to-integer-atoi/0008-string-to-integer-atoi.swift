class Solution {
    func myAtoi(_ s: String) -> Int {
        let chars = Array(s)
        let n = chars.count
        if n == 0 { return 0 }
        
        let INT_MIN = Int(Int32.min)   // -2147483648
        let INT_MAX = Int(Int32.max)   //  2147483647
        
        var i = 0
        
        // 1. Skip leading whitespace
        while i < n && chars[i] == " " {
            i += 1
        }
        if i == n { return 0 }
        
        // 2. Check sign
        var sign = 1
        if chars[i] == "-" {
            sign = -1
            i += 1
        } else if chars[i] == "+" {
            i += 1
        }
        
        // 3. Convert digits
        var result = 0
        while i < n, let digit = chars[i].wholeNumberValue {
            // 4. Check overflow before adding digit
            if result > (INT_MAX - digit) / 10 {
                return sign == 1 ? INT_MAX : INT_MIN
            }
            result = result * 10 + digit
            i += 1
        }
        
        return sign * result
    }
}
