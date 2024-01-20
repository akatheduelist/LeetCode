/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n<=0) return true

    for(i=0; i<flowerbed.length; i++) {
        const currentFlower = flowerbed[i];
        const prevFlower = flowerbed[i-1];
        const nextFlower = flowerbed[i+1];
        
        if(currentFlower === 0 && 
        prevFlower !== 1 && 
        nextFlower !== 1) {
            n--
            flowerbed[i] = 1
            i++
        }

        if (n<=0) return true
    }
    return false
};