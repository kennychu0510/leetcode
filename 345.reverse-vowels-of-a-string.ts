/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const listOfVowels: string[] = []
  for (let char of s) {
    if (VOWELS.includes(char)) {
      listOfVowels.push(char)
    }
  }
  const str = s.split("");
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      const replace = listOfVowels.pop()
      if (replace) str[i] = replace
    }
  }
  return str.join('')
};
// @lc code=end

