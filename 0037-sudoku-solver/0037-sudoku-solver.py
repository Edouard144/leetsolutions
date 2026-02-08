class Solution(object):
    def solveSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: None Do not return anything, modify board in-place instead.
        """

        # Precompute rows, cols, and boxes usage
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]

        empties = []

        for r in range(9):
            for c in range(9):
                val = board[r][c]
                if val == '.':
                    empties.append((r, c))
                else:
                    rows[r].add(val)
                    cols[c].add(val)
                    box_idx = (r // 3) * 3 + (c // 3)
                    boxes[box_idx].add(val)

        def backtrack(idx):
            # All empty cells filled: solved
            if idx == len(empties):
                return True

            r, c = empties[idx]
            box_idx = (r // 3) * 3 + (c // 3)

            for ch in map(str, range(1, 10)):
                if ch in rows[r] or ch in cols[c] or ch in boxes[box_idx]:
                    continue

                # Place digit
                board[r][c] = ch
                rows[r].add(ch)
                cols[c].add(ch)
                boxes[box_idx].add(ch)

                if backtrack(idx + 1):
                    return True

                # Undo
                board[r][c] = '.'
                rows[r].remove(ch)
                cols[c].remove(ch)
                boxes[box_idx].remove(ch)

            return False

        backtrack(0)

        