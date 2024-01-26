/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let firstNum = Infinity;
    let secondNum = Infinity;

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        if (currentNum <= firstNum) firstNum = currentNum;
        if (currentNum > firstNum && currentNum <= secondNum) secondNum = currentNum;
        if (currentNum > secondNum) return true;
    }

    return false
};