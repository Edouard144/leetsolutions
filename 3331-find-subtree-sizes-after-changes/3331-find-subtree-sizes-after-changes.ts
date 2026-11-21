function findSubtreeSizes(parent: number[], s: string): number[] {
    const n = parent.length;
    const children: number[][] = Array.from({ length: n }, () => []);

    // Build the original tree.
    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }

    const newParent: number[] = parent.slice();
    const last: number[] = new Array(26).fill(-1);

    // First DFS: reparent each node to its closest same-letter ancestor.
    const reparent = (node: number): void => {
        const c = s.charCodeAt(node) - 97;
        const previous = last[c];

        if (node !== 0 && previous !== -1) {
            newParent[node] = previous;
        }

        last[c] = node;

        for (const child of children[node]) {
            reparent(child);
        }

        last[c] = previous; // backtrack
    };

    reparent(0);

    // Build the final tree.
    const finalChildren: number[][] = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        finalChildren[newParent[i]].push(i);
    }

    const answer = new Array(n).fill(1);

    // Second DFS: count subtree sizes.
    const count = (node: number): number => {
        let size = 1;

        for (const child of finalChildren[node]) {
            size += count(child);
        }

        answer[node] = size;
        return size;
    };

    count(0);
    return answer;
}