/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(i=0; i<flowerbed.length; i++) {
        const firstFlower = i === 0
        const lastFlower = i === flowerbed.length - 1

        if(flowerbed[i] === 0 && 
        (flowerbed[i-1] === 0 || firstFlower) && 
        (flowerbed[i+1] === 0 || lastFlower)) {
            n--
            flowerbed[i] = 1
        }
        if (n<=0) return true
    }
    return false
};