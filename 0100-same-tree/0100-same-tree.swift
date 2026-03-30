/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */

class Solution {
    func isSameTree(_ p: TreeNode?, _ q: TreeNode?) -> Bool {
        // both nil -> same
        if p == nil && q == nil {
            return true
        }
        
        // one nil or value mismatch -> not same
        if p == nil || q == nil || p!.val != q!.val {
            return false
        }
        
        // recursively compare left and right
        return isSameTree(p!.left, q!.left) &&
               isSameTree(p!.right, q!.right)
    }
}