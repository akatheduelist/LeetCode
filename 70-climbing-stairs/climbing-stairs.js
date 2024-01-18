/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo={}) {
  // Recursivelly break down the problem to stopping point of 0 steps
  // if n=0 return 1 >> You have found the end of a valid path, count 1.
  // if n<0 return 0 >> You have found the end of an invalid path, count 0.
  // Bug -> Time limit exceeded on larger input, memoize tree?

  if(n===0) return 1
  if(n<0) return 0
  if(n in memo) {
      return memo[n]
  }

  memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo)

  return memo[n]  
};