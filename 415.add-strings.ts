/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let sum = '';
  let i = 1;
  let carryOver = 0;
  while (num1[num1.length - i] || num2[num2.length - i]) {
    const a = Number(num1[num1.length - i]) || 0;
    const b = Number(num2[num2.length - i]) || 0;

    const sumInNum = a + b + carryOver
    sum = sumInNum % 10 + sum;
    carryOver = Math.floor(sumInNum / 10);
    i++;
  }
  if (carryOver > 0) {
    sum = carryOver + sum;
  } 
  return sum;
};
// @lc code=end

