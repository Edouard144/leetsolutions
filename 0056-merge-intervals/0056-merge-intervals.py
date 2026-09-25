class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        if not intervals:
            return []
        
        # Sort by start time
        intervals.sort(key=lambda x: x[0])
        
        merged = [intervals[0]]
        
        for curr in intervals[1:]:
            last = merged[-1]
            # No overlap
            if curr[0] > last[1]:
                merged.append(curr)
            else:
                # Overlap: merge by extending the end
                last[1] = max(last[1], curr[1])
        
        return merged