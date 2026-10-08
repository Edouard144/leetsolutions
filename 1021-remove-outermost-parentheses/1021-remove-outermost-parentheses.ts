function removeOuterParentheses(s: string): string {
  let balance = 0;
  let result = '';

  for (const ch of s) {
    if (ch === '(') {
      // If this is not the outermost '(', include it
      if (balance > 0) {
        result += ch;
      }
      balance++;
    } else {
      // ch === ')'
      balance--;
      // If this is not the outermost ')', include it
      if (balance > 0) {
        result += ch;
      }
    }
  }

  return result;
}