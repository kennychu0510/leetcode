/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
  const mid = Math.floor(s.length / 2);
  let substring = ''
  for (let i = 1; i <= mid; i++) {
    substring = s.slice(0, i);
    const n = Math.floor(s.length / i)
    if (repeatSubstring(substring, n) === s) return true
  }
  return false
};
function repeatSubstring(substring: string, n: number): string {
  let output = '';
  for (let i = 0; i < n; i++) {
    output += substring
  }
  return output
}
// @lc code=end

