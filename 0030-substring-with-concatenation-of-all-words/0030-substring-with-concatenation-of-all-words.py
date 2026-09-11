from collections import Counter, defaultdict

class Solution(object):
    def findSubstring(self, s, words):
        if not s or not words:
            return []

        word_len = len(words[0])
        num_words = len(words)
        total_len = word_len * num_words
        need = Counter(words)
        res = []

        for offset in range(word_len):
            left = offset
            count = 0
            window = defaultdict(int)

            for right in range(offset, len(s) - word_len + 1, word_len):
                word = s[right:right + word_len]

                if word in need:
                    window[word] += 1
                    count += 1

                    while window[word] > need[word]:
                        left_word = s[left:left + word_len]
                        window[left_word] -= 1
                        left += word_len
                        count -= 1

                    if count == num_words:
                        res.append(left)
                        left_word = s[left:left + word_len]
                        window[left_word] -= 1
                        left += word_len
                        count -= 1
                else:
                    window.clear()
                    count = 0
                    left = right + word_len

        return res