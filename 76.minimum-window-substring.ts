/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const required: any = {}
  const currentCount: any = {}
  for (let char of t) {
    if (!required[char]) required[char] = 0
    currentCount[char] = 0
    required[char]++
  }
  let currentAnswer = {
    left: 0,
    right: 0,
    length: Number.POSITIVE_INFINITY
  }

  function checkIfSubStrExists() {
    for (let char in required) {
      if (required[char] > currentCount[char]) return false
    }
    return true
  }

  function updateCount(char: string, type: 'add' | 'remove') {
    if (type === 'add') {
      if (char in currentCount) {
        currentCount[char] += 1
      }
    } else {
      if (char in currentCount) {
        currentCount[char] -= 1
      }
    }
  }

  let start = 0;
  let end = 0;

  updateCount(s[end], 'add')

  while (start < s.length) {
    if (checkIfSubStrExists()) {
      const lengthOfSubstr = end - start + 1
      if (lengthOfSubstr < currentAnswer.length) {
        currentAnswer = {
          left: start,
          right: end,
          length: lengthOfSubstr
        }
      }
      updateCount(s[start], 'remove')
      start++
    } else {
      if (end < s.length) {
        end++
        updateCount(s[end], 'add')
      } else {
        updateCount(s[start], 'remove')
        start++
      }
    }
  }
  if (currentAnswer.length >= Number.POSITIVE_INFINITY) return ''
  return s.slice(currentAnswer.left, currentAnswer.right + 1)

};
// @lc code=end

