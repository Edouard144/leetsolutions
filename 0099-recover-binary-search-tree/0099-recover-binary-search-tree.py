class Solution(object):
    def recoverTree(self, root):
        first = None
        second = None
        previous = None
        current = root

        while current:
            if current.left is None:
                # Visit current
                if previous and previous.val > current.val:
                    if first is None:
                        first = previous
                    second = current

                previous = current
                current = current.right

            else:
                # Find the predecessor of current
                predecessor = current.left

                while predecessor.right and predecessor.right != current:
                    predecessor = predecessor.right

                if predecessor.right is None:
                    # Create a temporary thread
                    predecessor.right = current
                    current = current.left

                else:
                    # Remove the temporary thread
                    predecessor.right = None

                    # Visit current
                    if previous and previous.val > current.val:
                        if first is None:
                            first = previous
                        second = current

                    previous = current
                    current = current.right

        first.val, second.val = second.val, first.val