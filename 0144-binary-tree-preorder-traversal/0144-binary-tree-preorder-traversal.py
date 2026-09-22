class Solution(object):
    def preorderTraversal(self, root):
        result = []

        if root is None:
            return result

        stack = [root]

        while stack:
            node = stack.pop()
            result.append(node.val)

            # Push right first so left is processed first.
            if node.right is not None:
                stack.append(node.right)

            if node.left is not None:
                stack.append(node.left)

        return result