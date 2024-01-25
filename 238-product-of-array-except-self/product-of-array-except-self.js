/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const answer = []
    const memo = {}

    for(let i=0; i<nums.length; i++){
        const currNum = nums[i]
        
        if(!(currNum in memo)) {
            nums.splice(i, 1)
            const total = nums.reduce((accumulator, value) => accumulator * value, 1)
            nums.splice(i, 0, currNum)
            memo[currNum] = total
            answer.push(total)
        } else {
            answer.push(memo[currNum])
        }
    }

    return answer
};