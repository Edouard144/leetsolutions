/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const stack: TreeNode[] = [root];

    while (stack.length > 0) {
        const node = stack.pop()!;
        result.push(node.val);

        // Push left first so right is processed first.
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    // Current order is root -> right -> left.
    // Reverse it to get left -> right -> root (postorder).
    return result.reverse();
}