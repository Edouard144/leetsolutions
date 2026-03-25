class Solution {
    func convert(_ s: String, _ numRows: Int) -> String {
        // Edge case: if only one row or fewer chars than rows, no change
        if numRows == 1 || numRows >= s.count {
            return s
        }
        
        // Prepare an array of rows (each row is a String)
        var rows = Array(repeating: "", count: numRows)
        
        var currentRow = 0
        var goingDown = false
        
        for ch in s {
            rows[currentRow].append(ch)
            
            // Reverse direction at top or bottom row
            if currentRow == 0 || currentRow == numRows - 1 {
                goingDown.toggle()
            }
            
            currentRow += goingDown ? 1 : -1
        }
        
        // Concatenate all rows
        return rows.joined()
    }
}