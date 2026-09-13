class Solution(object):
    def largestOverlap(self, img1, img2):
        n = len(img1)
        ones1 = [(i, j) for i in range(n) for j in range(n) if img1[i][j] == 1]
        ones2 = [(i, j) for i in range(n) for j in range(n) if img2[i][j] == 1]

        count = {}
        best = 0

        for x1, y1 in ones1:
            for x2, y2 in ones2:
                shift = (x1 - x2, y1 - y2)
                count[shift] = count.get(shift, 0) + 1
                best = max(best, count[shift])

        return best