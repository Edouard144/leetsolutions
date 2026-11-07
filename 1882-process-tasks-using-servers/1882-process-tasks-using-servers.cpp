class Solution {
public:
    vector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {
        int n = servers.size();
        int m = tasks.size();

        // Free servers: (weight, index)
        priority_queue<
            pair<int, int>,
            vector<pair<int, int>>,
            greater<pair<int, int>>
        > freeServers;

        // Busy servers: (freeTime, weight, index)
        priority_queue<
            tuple<long long, int, int>,
            vector<tuple<long long, int, int>>,
            greater<tuple<long long, int, int>>
        > busyServers;

        for (int i = 0; i < n; ++i) {
            freeServers.push({servers[i], i});
        }

        vector<int> ans(m);

        for (int j = 0; j < m; ++j) {
            long long currentTime = j;

            while (!busyServers.empty() &&
                   get<0>(busyServers.top()) <= currentTime) {
                auto [freeTime, weight, index] = busyServers.top();
                busyServers.pop();
                freeServers.push({weight, index});
            }

            int serverIndex;

            if (!freeServers.empty()) {
                auto [weight, index] = freeServers.top();
                freeServers.pop();
                serverIndex = index;

                long long finishTime = currentTime + tasks[j];
                busyServers.push({finishTime, weight, index});
            } else {
                auto [freeTime, weight, index] = busyServers.top();
                busyServers.pop();
                serverIndex = index;

                long long finishTime = freeTime + tasks[j];
                busyServers.push({finishTime, weight, index});
            }

            ans[j] = serverIndex;
        }

        return ans;
    }
};