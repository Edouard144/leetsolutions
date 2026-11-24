class Solution {
public:
    int maxLength(vector<int>& nums) {
        int n = nums.size();
        int ans = 1;

        for (int i = 0; i < n; ++i) {
            int cnt[4] = {0, 0, 0, 0}; // exponents of 2, 3, 5, 7
            int mn[4] = {100, 100, 100, 100};
            int mx[4] = {0, 0, 0, 0};

            for (int j = i; j < n; ++j) {
                int x = nums[j];
                int idx = 0;

                for (int p : {2, 3, 5, 7}) {
                    int e = 0;
                    while (x % p == 0) {
                        x /= p;
                        ++e;
                    }

                    cnt[idx] += e;
                    mn[idx] = min(mn[idx], e);
                    mx[idx] = max(mx[idx], e);
                    ++idx;
                }

                bool ok = true;
                for (int k = 0; k < 4; ++k) {
                    if (cnt[k] != mn[k] + mx[k]) {
                        ok = false;
                        break;
                    }
                }

                if (ok) {
                    ans = max(ans, j - i + 1);
                }
            }
        }

        return ans;
    }
};