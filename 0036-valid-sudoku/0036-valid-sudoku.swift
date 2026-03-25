class Solution {
    func isValidSudoku(_ board: [[Character]]) -> Bool {
        // rows[i][d] = true if digit (d) already seen in row i
        var rows = Array(repeating: Array(repeating: false, count: 9), count: 9)
        var cols = Array(repeating: Array(repeating: false, count: 9), count: 9)
        var boxes = Array(repeating: Array(repeating: false, count: 9), count: 9)
        
        for r in 0..<9 {
            for c in 0..<9 {
                let ch = board[r][c]
                if ch == "." { continue }
                
                // Convert '1'...'9' to 0...8
                guard let ascii = ch.asciiValue else { return false }
                let d = Int(ascii - Character("1").asciiValue!)
                
                // Box index: (r / 3) * 3 + (c / 3)
                let boxIndex = (r / 3) * 3 + (c / 3)
                
                // If already seen in row, col, or box -> invalid
                if rows[r][d] || cols[c][d] || boxes[boxIndex][d] {
                    return false
                }
                
                rows[r][d] = true
                cols[c][d] = true
                boxes[boxIndex][d] = true
            }
        }
        
        return true
    }
}