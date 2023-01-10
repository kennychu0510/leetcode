/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
  let upperCaseCount = 0;
  for (let char of word) {
    if (isUpperCase(char)) {
      upperCaseCount++;
    } 
  }
  if (upperCaseCount === 0 || upperCaseCount === word.length) {
    return true;
  } else if (upperCaseCount === 1 && isUpperCase(word[0])) {
    return true;
  }
  return false;
};

function isUpperCase(char: string): boolean {
  if (char.toUpperCase() === char) {
    return true;
  }
  return false;
} 
// @lc code=end

