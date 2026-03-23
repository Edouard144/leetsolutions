class Solution {
    func divide(_ dividend: Int, _ divisor: Int) -> Int {
        // 32-bit bounds
        let INT_MIN = Int(Int32.min)   // -2147483648
        let INT_MAX = Int(Int32.max)   //  2147483647
        
        // Overflow case: INT_MIN / -1 = 2147483648 > INT_MAX
        if dividend == INT_MIN && divisor == -1 {
            return INT_MAX
        }
        
        // Determine sign of result
        let negative = (dividend < 0) != (divisor < 0)
        
        // Work with negative numbers to avoid overflow on abs(INT_MIN)
        var dvd = dividend
        var dvs = divisor
        if dvd > 0 { dvd = -dvd }
        if dvs > 0 { dvs = -dvs }
        
        var result = 0
        
        // Main loop: subtract largest shifted divisor each time
        while dvd <= dvs {
            var temp = dvs
            var multiple = 1
            
            // Try to double temp while it doesn't overflow and still >= dvd
            while temp >= (INT_MIN >> 1) && dvd <= (temp << 1) {
                temp <<= 1
                multiple <<= 1
            }
            
            dvd -= temp
            result += multiple
        }
        
        // Apply sign
        return negative ? -result : result
    }
}
