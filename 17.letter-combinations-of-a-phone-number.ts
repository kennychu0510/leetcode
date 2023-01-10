/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  let output: string[] = []

  function addLetter(digits: string, str: string) {
    if (digits.length === 0) {
      if (str) output.push(str)      
      return
    }
    const digit = digits.slice(0, 1)
    for (let letter of map[digit]) {
      const newStr = str + letter
      addLetter(digits.slice(1), newStr)
    }
  }

  addLetter(digits, '')
  
  return output
};
// @lc code=end

