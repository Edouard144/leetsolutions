class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};

        vector<string> result;
        string current;
        unordered_map<char, string> mp = {
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'6', "mno"},
            {'7', "pqrs"},
            {'8', "tuv"},
            {'9', "wxyz"}
        };

        backtrack(digits, 0, mp, current, result);
        return result;
    }

private:
    void backtrack(const string &digits,
                   int index,
                   unordered_map<char, string> &mp,
                   string &current,
                   vector<string> &result) {
        if (index == digits.size()) {
            result.push_back(current);
            return;
        }

        const string &letters = mp[digits[index]];
        for (char c : letters) {
            current.push_back(c);
            backtrack(digits, index + 1, mp, current, result);
            current.pop_back();
        }
    }
};
