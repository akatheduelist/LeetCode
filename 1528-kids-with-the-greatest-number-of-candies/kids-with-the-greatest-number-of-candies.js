/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    const maxCandies = Math.max(...candies);

    for(let i=0; i<candies.length; i++){
        if(candies[i] + extraCandies >= maxCandies) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
};