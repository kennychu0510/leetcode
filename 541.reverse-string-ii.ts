/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  function reverseSubStr(str: string): string {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]
    }
    return reversedStr
  }

  function reverseFirstKElementsInStr(str: string, k: number): string {
    let substrToBeReversed = str.slice(0, k)
    let reversedSubStr = reverseSubStr(substrToBeReversed)
    return reversedSubStr + str.slice(k)
  }
  const arr: string[] = []
  for (let i = 0; i < s.length; i += 2 * k) {
    let str = (s.slice(i, i + 2 * k))
    if (str.length < k) {
      str = reverseFirstKElementsInStr(str, str.length)
    }
    else {
      str = reverseFirstKElementsInStr(str, k)
    }
    arr.push(str)
  }
  return arr.join('')
};
// @lc code=end

