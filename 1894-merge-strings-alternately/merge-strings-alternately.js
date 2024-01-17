/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // iterate over word word1 getting first char
    // if no char skip
    // iterate over word 2 getting first char
    // if no char skip
    // concat char1 + char 2
    // increate iterator by 2
    // repeat

    let ans = ''
    for (let i=0; i<word1.length || i<word2.length; i++) {
        if(word1[i]){
            ans = ans + word1[i]
        };
        if(word2[i]){
            ans = ans + word2[i]
        }
    }
    return ans
};