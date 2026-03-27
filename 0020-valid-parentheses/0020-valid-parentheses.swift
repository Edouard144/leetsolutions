class Solution {
    func isValid(_ s: String) -> Bool {
        // Quick fail: odd length can’t be fully paired
        if s.count % 2 == 1 { return false }
        
        let chars = Array(s)
        var stack = [Character]()
        
        let matching: [Character: Character] = [
            ")": "(",
            "]": "[",
            "}": "{"
        ]
        
        for c in chars {
            if c == "(" || c == "[" || c == "{" {
                stack.append(c)
            } else {
                // c is a closing bracket
                if stack.isEmpty { return false }
                let top = stack.removeLast()
                if matching[c] != top { return false }
            }
        }
        
        return stack.isEmpty
    }
}