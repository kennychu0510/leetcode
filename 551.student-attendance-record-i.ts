/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {
  let absentCount = 0
  let lateCount = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      absentCount++

      if (absentCount === 2) {
        return false
      }
    }
    if (s[i] === 'L' && i > 0 && s[i-1] === 'L') {
      lateCount++
      if (lateCount === 2) return false
    } else {
      if (lateCount > 0) {
        lateCount = 0
      }
    }
  }
  return true
};
// @lc code=end

