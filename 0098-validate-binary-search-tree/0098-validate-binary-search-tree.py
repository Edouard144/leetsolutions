# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def isValidBST(self, root):
        def validate(node, lower, upper):
            if node is None:
                return True

            if not (lower < node.val < upper):
                return False

            return (
                validate(node.left, lower, node.val) and
                validate(node.right, node.val, upper)
            )

        return validate(root, float("-inf"), float("inf"))