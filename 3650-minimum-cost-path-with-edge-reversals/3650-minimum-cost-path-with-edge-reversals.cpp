#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minCost(int n, vector<vector<int>>& edges) {
        // Build adjacency list: for each (u, v, w),
        // add u -> v (cost w) and v -> u (cost 2*w).
        vector<vector<pair<int,int>>> adj(n);
        adj.reserve(n);

        for (auto &e : edges) {
            int u = e[0], v = e[1], w = e[2];
            adj[u].push_back({v, w});       // normal edge
            adj[v].push_back({u, 2 * w});   // reversed edge
        }

        const long long INF = (1LL << 60);
        vector<long long> dist(n, INF);
        dist[0] = 0;

        // min-heap: (distance, node)
        priority_queue<pair<long long,int>, 
                       vector<pair<long long,int>>, 
                       greater<pair<long long,int>>> pq;
        pq.push({0, 0});

        while (!pq.empty()) {
            auto [d, u] = pq.top();
            pq.pop();
            if (d > dist[u]) continue;
            if (u == n - 1) break; // optional early stop

            for (auto &edge : adj[u]) {
                int v = edge.first;
                int w = edge.second;
                long long nd = d + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                    pq.push({nd, v});
                }
            }
        }

        return dist[n - 1] == INF ? -1 : (int)dist[n - 1];
    }
};
