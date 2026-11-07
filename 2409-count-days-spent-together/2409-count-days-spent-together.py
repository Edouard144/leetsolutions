class Solution(object):
    def countDaysTogether(self, arriveAlice, leaveAlice, arriveBob, leaveBob):
        """
        :type arriveAlice: str
        :type leaveAlice: str
        :type arriveBob: str
        :type leaveBob: str
        :rtype: int
        """
        days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        def day_number(date):
            month = int(date[:2])
            day = int(date[3:])
            return sum(days[:month - 1]) + day

        alice_start = day_number(arriveAlice)
        alice_end = day_number(leaveAlice)
        bob_start = day_number(arriveBob)
        bob_end = day_number(leaveBob)

        start = max(alice_start, bob_start)
        end = min(alice_end, bob_end)

        return max(0, end - start + 1)