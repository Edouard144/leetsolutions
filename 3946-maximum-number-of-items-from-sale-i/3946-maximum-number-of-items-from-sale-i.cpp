class Solution {
public:
    int maximumSaleItems(vector<vector<int>>& items, int budget) {
        int MAXF = 1500;
        vector<int> cnt(MAXF + 1, 0);

        // cnt[f] = number of item types whose factor is divisible by f
        for (auto& item : items) {
            int factor = item[0];
            for (int f = 1; f <= factor; f++) {
                if (factor % f == 0) {
                    cnt[f]++;
                }
            }
        }

        vector<int> dp(budget + 1, 0);

        for (auto& item : items) {
            int factor = item[0];
            int price = item[1];
            int firstValue = cnt[factor]; // 1 purchased + free copies

            vector<int> ndp = dp;

            // Buy the first copy: 0/1 knapsack transition
            for (int b = price; b <= budget; b++) {
                ndp[b] = max(ndp[b], dp[b - price] + firstValue);
            }

            // Buy additional copies: unbounded knapsack transition
            for (int b = price; b <= budget; b++) {
                ndp[b] = max(ndp[b], ndp[b - price] + 1);
            }

            dp = move(ndp);
        }

        return *max_element(dp.begin(), dp.end());
    }
};