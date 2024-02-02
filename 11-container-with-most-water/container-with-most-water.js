/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = -Infinity
    let pointer1 = 0
    let pointer2 = height.length - 1
    while (pointer2 > pointer1) {
        const minHeight = Math.min(height[pointer1], height[pointer2])
        const spaceBetween = pointer2 - pointer1
        const water = minHeight * spaceBetween
        if (water > max) max = water
        if (height[pointer2] > height[pointer1]) {
            pointer1++
        } else {
            pointer2--
        }
    }
    return max
};