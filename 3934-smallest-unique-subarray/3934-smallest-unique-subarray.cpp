class Solution {
public:
    int smallestUniqueSubarray(vector<int>& nums) {
        int n = nums.size();

        const long long MOD = (1LL << 61) - 1;
        const long long BASE = 131;

        auto power = [&](long long p) {
            __int128 result = 1, b = BASE;
            while (p) {
                if (p & 1) result = result * b % MOD;
                b = b * b % MOD;
                p >>= 1;
            }
            return (long long)result;
        };

        auto hasUnique = [&](int len) -> bool {
            if (len > n) return false;

            long long pw = power(len - 1);
            unordered_map<long long, int> freq;
            freq.reserve(n * 2);

            long long h = 0;
            for (int i = 0; i < len; i++) {
                h = ((__int128)h * BASE + nums[i]) % MOD;
            }
            freq[h]++;

            for (int i = len; i < n; i++) {
                long long removed = (__int128)nums[i - len] * pw % MOD;
                h = ((__int128)((h - removed + MOD) % MOD) * BASE + nums[i]) % MOD;
                freq[h]++;
            }

            for (const auto& [hash, count] : freq) {
                if (count == 1) return true;
            }
            return false;
        };

        int lo = 1, hi = n, ans = n;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (hasUnique(mid)) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return ans;
    }
};