class Solution {
    public String getPermutation(int n, int k) {
        // Precompute factorials
        int[] fact = new int[n + 1];
        fact[0] = 1;
        for (int i = 1; i <= n; i++) {
            fact[i] = fact[i - 1] * i;
        }

        // List of available numbers
        List<Integer> nums = new ArrayList<>();
        for (int i = 1; i <= n; i++) nums.add(i);

        // Convert k to 0-based index
        k--;

        StringBuilder sb = new StringBuilder();
        for (int i = n; i >= 1; i--) {
            int blockSize = fact[i - 1];
            int index = k / blockSize;
            k = k % blockSize;

            sb.append(nums.get(index));
            nums.remove(index);
        }

        return sb.toString();
    }
}
