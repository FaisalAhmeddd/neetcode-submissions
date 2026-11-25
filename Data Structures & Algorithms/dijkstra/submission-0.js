class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        // Step 1: adjacency list
        const graph = [];
        for (let i = 0; i < n; i++) {
            graph.push([]);
        }
        for (const edge of edges) {
            graph[edge[0]].push([edge[1], edge[2]]);
        }

        // Step 2: distance table
        const dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        // Step 3: main loop
        const visited = new Array(n).fill(false);

        for (let round = 0; round < n; round++) {
            // find the closest unvisited city
            let u = -1;
            for (let i = 0; i < n; i++) {
                if (!visited[i] && (u === -1 || dist[i] < dist[u])) {
                    u = i;
                }
            }

            // nothing left that we can reach
            if (u === -1 || dist[u] === Infinity) break;

            visited[u] = true;

            // Step 4: relax every road leaving u
            for (const [v, w] of graph[u]) {
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }

        // Step 5: build the result, -1 for unreachable cities
        const result = {};
for (let i = 0; i < n; i++) {
    result[i] = dist[i] === Infinity ? -1 : dist[i];
}
return result;
    }
}